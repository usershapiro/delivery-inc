import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import Customers from "../../CustomersArea/Customers/Customers";
import Packages from "../../PackagesArea/Packages/Packages";
import { Route, Routes ,Navigate} from "react-router-dom";
import Invoice from "../../InvoiceArea/Invoice/Invoice";
function Routing() {
    return (
        <div className="Routing">
          <Routes>

          <Route path="/" element={<Navigate to="/home" />} />
		  <Route path="/home" element={<Home />} />
          <Route path="/customers" element={<Customers/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/invoice" element={<Invoice/>} />
          </Routes>
        </div>
    );
}

export default Routing;
