const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  login: async (req, res) => {
    console.log(req.body, "login");
    const { username, password } = req.body;
    if (!username || !password) return res.send("Email und Passowerd control");
    const user = await User.findOne({ username });
    console.log(user);
    const passwordMatch = bcrypt.compareSync(password, user.password);
    console.log(passwordMatch); //biye burdan true veya false doner
    if (user && passwordMatch) {
      console.log("icer");
      if (user.isActive) {
        const accessData = user.toJSON(); // Valuable data.
        console.log(accessData,"accesdata")
        const accessTime = "30m";
        const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, {
          expiresIn: accessTime,
        });
        console.log("accessToken", accessToken);

        const refreshData = { id: user._id }; 
        const refreshTime = "3d";
        const refreshToken = jwt.sign(refreshData, process.env.REFRESH_KEY, {
          expiresIn: refreshTime,
        });
        console.log("refreshToken", refreshToken);

        res.status(200).send({
          error: false,
          bearer: {
            accessToken,
            refreshToken,
          },
        });
      } else {
        res.send("isACTIVE PATLADI");
      }
    } else {
      res.send("login patladi");
    }
  },

  refresh: async (req, res) => {
    const refreshToken = req?.body.bearer?.refreshToken;
    console.log(refreshToken, "refs");
    if (refreshToken) {
        jwt.verify(refreshToken,process.env.REFRESH_KEY,async function (err, data) {
          if (err) return res.send("refresh token patladi");
          const { id } = data;
          console.log(id);
          const user = await User.findOne({ _id: id });
          console.log(user);
          if (user && user.isActive) {
            const accessToken = jwt.sign(
              user.toJSON(),
              process.env.ACCESS_KEY,
              { expiresIn: "30m" }
            );

            res.status(200).send({
              error: false,
              bearer: {
                access: accessToken,
              },
            });
          } else {
            res.send("isActibe refresh patladi");
          }
        }
      );
    }else{
        res.send("refreh yeniden patladi")
    }
  },

  logout: async (req,res) => {


//ontrarfan toneleri silnce gidecek    
  },
};
