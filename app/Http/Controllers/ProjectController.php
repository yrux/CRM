<?php

namespace App\Http\Controllers;
use App\Models\{BrandUser, Brand, Project, ProjectUser, User, Payment, Lead};
use Illuminate\Http\Request;
use App\Http\Resources\ProjectResource;
use App\Repositories\FileRepository;
use Illuminate\Support\Facades\Gate;
use DB;
class ProjectController extends Controller
{
    protected $file;
    public function __construct(FileRepository $file)
    {
        $this->file = $file;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny',Project::class);
        $data = Project::where('projects.company_id',$request->user()->company_id);
        if(isset($_GET['sortCol'])){
            $data = $data->orderBy($_GET['sortCol'],($_GET['sortByDesc']==1?'desc':'asc'));
        }else{
            $data = $data->orderBy('projects.id','desc');
        }
        if(!empty($_GET['search'])){
            $data = $data->Where(
                function($query) {
                $q = $_GET['search'];
                $query->orWhere('projects.title', 'like', '%'.$q.'%')->orWhere('customers.name', 'like', '%'.$q.'%')
                ->orWhere('customers.email', 'like', '%'.$q.'%')
                ->orWhere('projects.project_id', 'like', '%'.$q.'%');
            });
        }
        if(!empty($_GET['customer_id'])){
            $data = $data->where('customers.id',intval($_GET['customer_id']));
        }
        if($request->user()->role_id==6){
            $data = $data->where('customers.id',$request->user()->id);
        }
        //getting customer names
        $data = $data->leftJoin('project_users',function($join){
            $join->on('projects.id','=','project_users.project_id')->where('project_users.role_id',6);
        });
        /*$data = $data->leftJoin('project_users as project_sale',function($join){
            $join->on('projects.id','=','project_sale.project_id')->where('project_sale.role_id',6);
        });*/
        $data = $data->leftJoin('users as customers',function($join){
            $join->on('project_users.user_id','=','customers.id')->where('customers.role_id',6);
        });
        $data = $data->leftJoin(DB::raw('(SELECT SUM(amount) AS total_paid,project_id FROM payments WHERE payments.status=1 GROUP BY project_id) AS payment_paid'), 
        function($join)
        {
           $join->on('projects.id', '=', 'payment_paid.project_id');
        });
        $data = $data->leftJoin(DB::raw('(SELECT IFNULL(SUM(amount),0) AS total_balance,project_id FROM payments WHERE payments.status IN(0,2) GROUP BY project_id) AS payment_balance'), 
        function($join)
        {
           $join->on('projects.id', '=', 'payment_balance.project_id');
        });
        $data = $data->select('customers.name as customer_name','customers.email as customer_email','projects.title','projects.project_id','projects.created_at','projects.id as project_id_int',DB::raw('IFNULL(payment_paid.total_paid,0) as total_paid'),DB::raw('IFNULL(payment_balance.total_balance,0) as total_balance'));
        if($request->user()->role_id==4){
            /*$data = $data->leftJoin('users as salesupport',function($join){
                $join->on('project_sale.user_id','=','salesupport.id')->where('salesupport.role_id',4);
            });
            $data = $data->where('salesupport.id',$request->user()->id);*/
        }
        if(intval($_GET['perpage'])>0){
            $data=$data->paginate($_GET['perpage']);
        }else{
            $data=$data->get();
        }
        return ProjectResource::collection($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Gate::authorize('create',Project::class);
        $arr = $request->only('title','description','brand_id');
        // dd($request->user()->brand);
        //$request->user()->brand->id
        $arr['company_id'] = $request->user()->company_id;
        $brand = Brand::find($request->brand_id);
        $arr['project_id'] = $brand->brand_code.'-'.time();
        $project = Project::create($arr);
        $project->project_id = $project->project_id.'-'.$project->id;
        $project->save();
        $brand_users = BrandUser::where('brand_id',$request->brand_id)->where('is_owner',1)->where('user_id','<>',$request->user()->id)->get();
        ProjectUser::create([
            'project_id'=>$project->id,
            'user_id'=>$request->user()->id,
            'role_id'=>$request->user()->role_id
        ]);
        ProjectUser::create([
            'project_id'=>$project->id,
            'user_id'=>$request->customer_id,
            'role_id'=>6
        ]);
        //binding project with user //User, Payment, Lead
        Lead::where('user_id',$request->customer_id)->first()->payments()->where('project_id',0)->update([
            'project_id'=>$project->id
        ]);
        //binding end
        foreach($brand_users as $brand_user){
            ProjectUser::create([
                'project_id'=>$project->id,
                'user_id'=>$brand_user->user_id,
                'role_id'=>$brand_user->user->role_id
            ]);
        }
        if($request->attachements){
            $this->file->create($request->attachements, 'projects', $project->id, 2);
        }
        return new ProjectResource($project);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        Gate::authorize('view',$project);
        return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        Gate::authorize('update',$project);
        $arr = $request->only('title','description','brand_id');
        $project->update($arr);
        return new ProjectResource($project);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        Gate::authorize('delete',$project);
        $project->delete();
        return response()->json(null, 204);
    }
}
