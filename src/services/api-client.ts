import axios from "axios";


export default axios.create({

  baseURL: "https://api.rawg.io/api",
  params:{
    keys:'a799fb712f474c999bdeedafceb21556'
  }
})
