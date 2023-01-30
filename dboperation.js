// const config=require("./dbconfig");
// const sql=require('mssql');

// async function getdata(){
//     try{
//         let pool=await sql.connect(config);
//         console.log('sql server connected ...');
//     }catch(error){
//         console.log(error)
//     }
// }
// async function getData_withQuery(){
//     try{
//         let pool=await sql.connect(config);
//         let res=await pool.request().query("SELECT * FROM employee2");
//         return res.recordsets;
//     }catch(error){
//         console.log(error)
//     }
// }
// async function insertData_withQuery(ID,lastName,firstName,email){
//     try{
//         let pool = await sql.connect(config);
//         let res=await pool.request().query("INSERT INTO employee2(ID,lastName,firstName,email)")
//     }
// }

// module.exports={
//     getdata,
//     // getData_withQuery
// }