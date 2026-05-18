/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import People from "./pages/People";
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import EquipmentRequest from "./pages/EquipmentRequest";

import DashboardAdmin from "./pages/DashboardAdmin";
import ManagePeople from "./pages/ManagePeople";
import ManagePublications from "./pages/ManagePublications";
import ManageResearch from "./pages/ManageResearch";
import ManageTeaching from "./pages/ManageTeaching";
import ManageNews from "./pages/ManageNews";
import ViewForms from "./pages/ViewForms";
import ManageUsers from "./components/ManageUsers";
import ViewMaterialRequests from "./components/ViewMaterialRequests";
import RequestMaterials from "./components/RequestMaterials";





import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mt-4 mb-5">

          <Routes>
          
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

           
<Route
  path="/lab/request-material"
  element={
    <ProtectedRoute allowedRoles={["lab", "admin"]}>
      <EquipmentRequest />
    </ProtectedRoute>
  }
/>

            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <DashboardAdmin />
                </AdminRoute>
              }
            />
            
<Route
  path="/lab/request-materials"
  element={
    <ProtectedRoute allowedRoles={["lab", "admin"]}>
      <RequestMaterials />
    </ProtectedRoute>
  }
/>


<Route
  path="/admin/material-requests"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <ViewMaterialRequests />
    </ProtectedRoute>
  }
/>


            <Route
              path="/admin/people"
              element={
                <AdminRoute>
                  <ManagePeople />
                </AdminRoute>
              }
            />
             <Route
  path="/admin/material-requests"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <ViewMaterialRequests />
    </ProtectedRoute>
  }
/>

            <Route
              path="/admin/publications"
              element={
                <AdminRoute>
                  <ManagePublications />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/research"
              element={
                <AdminRoute>
                  <ManageResearch />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/teaching"
              element={
                <AdminRoute>
                  <ManageTeaching />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/news"
              element={
                <AdminRoute>
                  <ManageNews />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/forms"
              element={
                <AdminRoute>
                  <ViewForms />
                </AdminRoute>
              }
            />
            <Route
  path="/admin/users"
  element={
    <AdminRoute>
      <ManageUsers />
    </AdminRoute>
  }
/>

         </Routes>
        </div>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import People from "./pages/People";
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import DashboardAdmin from "./pages/DashboardAdmin";
import ManagePeople from "./pages/ManagePeople";
import ManagePublications from "./pages/ManagePublications";
import ManageResearch from "./pages/ManageResearch";
import ManageTeaching from "./pages/ManageTeaching";
import ManageNews from "./pages/ManageNews";
import ViewForms from "./pages/ViewForms";

import ManageUsers from "./components/ManageUsers";
import RequestMaterials from "./components/RequestMaterials";
import ViewMaterialRequests from "./components/ViewMaterialRequests";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mt-4 mb-5">

          <Routes>

            {/* -------------------- PUBLIC ROUTES -------------------- */}
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* -------------------- LAB STUDENT -------------------- */}
            <Route
              path="/lab/request-materials"
              element={
                <ProtectedRoute allowedRoles={["lab", "admin"]}>
                  <RequestMaterials />
                </ProtectedRoute>
              }
            />

            {/* -------------------- ADMIN DASHBOARD -------------------- */}
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <DashboardAdmin />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/people"
              element={
                <AdminRoute>
                  <ManagePeople />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/publications"
              element={
                <AdminRoute>
                  <ManagePublications />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/research"
              element={
                <AdminRoute>
                  <ManageResearch />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/teaching"
              element={
                <AdminRoute>
                  <ManageTeaching />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/news"
              element={
                <AdminRoute>
                  <ManageNews />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/forms"
              element={
                <AdminRoute>
                  <ViewForms />
                </AdminRoute>
              }
            />

            <Route
              path="/admin/users"
              element={
                <AdminRoute>
                  <ManageUsers />
                </AdminRoute>
              }
            />

            {/* -------------------- ADMIN MATERIAL REQUESTS -------------------- */}
            <Route
              path="/admin/material-requests"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <ViewMaterialRequests />
                </ProtectedRoute>
              }
            />

          </Routes>

        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
