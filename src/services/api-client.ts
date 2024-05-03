import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:3000/api',
  params:{
    keys:'a799fb712f474c999bdeedafceb21556'
  }
})
