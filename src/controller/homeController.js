import pool from "../configs/connectDB"


let getHomePage = async(req, res) =>{
    //logic 
    // let data = [];
    // simple query
  //   pool.query(
  //   'SELECT * FROM `users` ',
  //   function(err, results, fields) {
  //     results.map((row)=>{data.push({
  //       id: row.MaUser,
  //       email: row.Email,
  //       address: row.Address,
  //       firstName: row.FirstName, 
  //       lastName: row.LastName,
  //     })
  //   });
  //   return res.render("index.ejs", {dataUser: data});
  // })
  const [rows, fields] = await pool.execute('SELECT * FROM `users` ');

  return res.render("index.ejs", {dataUser: rows});
}
let getAboutPage = (req, res)=>{
    return res.send(`About`);
}

let getDetailPage= async(req,res)=>{
    let userId = req.params.userID;
    console.log(userId)
    let [user, fields] = await pool.execute('SELECT * FROM `users` WHERE MaUser = ?',[userId]);
    console.log('check', user);
    return res.send(JSON.stringify(user));
}

let createNewUser = async(req,res)=>{
    console.log('check req:', req.body)
    let{firstName,lastName,email,address} = req.body;
    console.log(firstName);
    await pool.execute( 'INSERT INTO users(FirstName,LastName,Email,Address) VALUES (?,?,?,?)',[firstName,lastName,email,address] );
    return res.redirect('/');
}

module.exports = {
    getHomePage,getAboutPage,getDetailPage,createNewUser
}