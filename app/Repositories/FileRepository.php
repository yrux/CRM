<?php
namespace App\Repositories;

use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\File;
class FileRepository implements BaseRepository {
    protected $model;
    public function __construct(File $model)
    {
        $this->model=$model;
    }
    public function find($id) : File {
        return $this->model->find($id);
    }
    public function findByTable($table_name, $ref_id, $type = 2) : File {
        if($type==2){
            return $this->model->where('table_name',$table_name)->where('ref_id',$ref_id)->get();
        }else{
            return $this->model->where('table_name',$table_name)->where('ref_id',$ref_id)->first();
        }
    }
    public function create($files, $table_name, $ref_id, $type=2) : Array {
        $iteration = 0;
        $result = [];
        foreach($files as $file){
            $path = $file->store($table_name);
            $plural_table = Str::studly(Str::singular($table_name));
            $result[] = File::create([
                'url'=>$path,
                'fileable_id'=>$ref_id,
                'fileable_type'=>'App\Models\\'.$plural_table,
                'table_name'=>$table_name,
            ]);
            $iteration++;
            if($iteration==1&&$type==1){
                break;
            }
        }
        return $result;
    }
    public function delete($id){
        $this->model->delete($id);
    }
    public function deleteByType($table_name,$ref_id){
        $this->model->where('table_name',$table_name)->where('ref_id',$ref_id)->delete();
    }
}