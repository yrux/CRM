var app = require('http').createServer({})
require('dotenv').config()
var io = require('socket.io')(app, {
    cors: {
        origin: "*",
        //methods: ["GET", "POST"]
    }
});
app.listen(9000);
io.on("connection", function (socket) {
    // console.log("user connected");
    socket.on('disconnect', () => {
        // console.log('user disconnected');
    });
    socket.on("channel", (arg) => {
        var date = new Date();
        var day = (date.getDate()<=9?'0'+date.getDate():date.getDate())
        var year = date.getFullYear()
        var nmonth = (date.getMonth()+1)
        var month = (nmonth<=9?'0'+nmonth:nmonth)
        var formatted_date = year+'-'+month+'-'+day+' '+(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
        var obj = {
            chat_head_id: arg[0],
            created_at: date.toJSON(),
            created_at_formatted: formatted_date,
            id: Math.random(9999999999),
            message: arg[1],
            updated_at: date.toJSON(),
            user_id: arg[3],
            files: (arg[4]?arg[4]:[])
        }
        io.emit("channel_" + arg[0], obj);
    });
    socket.on("lead", (arg) => {
        var date = new Date();
        var day = (date.getDate()<=9?'0'+date.getDate():date.getDate())
        var year = date.getFullYear()
        var nmonth = (date.getMonth()+1)
        var month = (nmonth<=9?'0'+nmonth:nmonth)
        var formatted_date = year+'-'+month+'-'+day+' '+(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
        var obj = {
            lead_id: arg[0],
            created_at: date.toJSON(),
            created_at_formatted: formatted_date,
            id: Math.random(9999999999),
            message: arg[1],
            updated_at: date.toJSON(),
            user_id: arg[3],
            files: (arg[4]?arg[4]:[])
        }
        io.emit("lead_" + arg[0], obj);
    });
});