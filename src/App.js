import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Header';
import Profile from './component/Dashboard/Profile';
import AdminLogin from './component/Login/AdminLogin';
import ResetPassword from './component/ResetPassword/ResetPassword';
import Roles from './Pages/Roles';
import MasterNumber from './Pages/MasterNumber';
import SystemTypes from './Pages/SystemTypes';
import DailyForecast from './component/DailyForecast/DailyForecast';
import PrivateRoute from './PrivateRoute'; 
import User from './component/Users/User';
import UserMessages from './Pages/UserMessages/UserMessages';
import { AppProvider } from './ContextApi/userContext';
import GeneralSettings from './Pages/GeneralSettings/GeneralSettings';
import DashBoard from './Pages/Dashboard';
import PaymentSetting from './Pages/PaymentSetting/PaymentSetting';
import SystemModules from './Pages/SystemModules/SystemModules';
import NameReading from './Pages/NameReading/NameReading';
import DobReading from './Pages/DobReading/DobReading';
import LuckiestParameters from './Pages/LuckiestParameters/LuckiestParameters';
import PrimaryNumbers from './Pages/PrimaryNumbers/PrimaryNumbers';
import MagicBox from './Pages/MagicBox/MagicBox';
import ElementalNumber from './Pages/ElementalNumber/ElementalNumber';
import DestinyNumbers from './Pages/DestinyNumbers/DestinyNumbers';
import VideosPage from './Pages/VideosPage/VideosPage';
import LifeCoachDesc from './Pages/LifeCoachDesc/LifeCoachDesc';
import SubscriptionPirce from './Pages/SubscriptionPrice/SubscriptionPirce';
import ZodiacSign from './Pages/ZodiacSign/ZodiacSign';
import PlanetNumbers from './Pages/PlanetNumbers/PlanetNumbers';
import LifeCycle from './Pages/LifeCycle/LifeCycle';
import LifeChanges from './Pages/LifeChanges/LifeChanges';
import CompaitablePartner from './Pages/CompaitablePartner/CompaitablePartner';
import PartnerRelationships from './Pages/PartnerRelationships/PartnerRelationships';
import ChildrenPage from './Pages/ChildrenPage/ChildrenPage';
import CompatibilityPercentage from './Pages/CompatibilityPercentage/CompatibilityPercentage';
import CompatibiltyDesc from './Pages/CompatibiltyDesc/CompatibiltyDesc';
import UserDetailedData from './component/Users/UserDetailedData';
function App() {
  return (
    <AppProvider>
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<PrivateRoute element={DashBoard} />} />
        <Route path="/profile" element={<PrivateRoute element={Profile} />} />
        <Route path="/reset" element={<PrivateRoute element={ResetPassword} />} />
        <Route path="/roles" element={<PrivateRoute element={Roles} />} />
        <Route path="/systemtype" element={<PrivateRoute element={SystemTypes} />} />
        <Route path="/modules" element={<PrivateRoute element={SystemModules} />} />
        <Route path="/Master" element={<PrivateRoute element={MasterNumber} />} />
        <Route path="/namereading" element={<PrivateRoute element={NameReading} />} />
        <Route path="/dobreading" element={<PrivateRoute element={DobReading} />} />
        <Route path="/luckiest_parameters" element={<PrivateRoute element={LuckiestParameters} />} />
        <Route path="/primaryno_types" element={<PrivateRoute element={PrimaryNumbers} />} />
        <Route path="/magicbox" element={<PrivateRoute element={MagicBox} />} />
        <Route path="/elementalno" element={<PrivateRoute element={ElementalNumber} />} />
        <Route path="/destinyno" element={<PrivateRoute element={DestinyNumbers} />} />
        <Route path="/videos" element={<PrivateRoute element={VideosPage} />} />
        <Route path="/lifecoach_descriptions" element={<PrivateRoute element={LifeCoachDesc} />} />
        <Route path="/subscription_price" element={<PrivateRoute element={SubscriptionPirce} />} />
        <Route path="/zodic_signs" element={<PrivateRoute element={ZodiacSign} />} />
        <Route path="/planet_numbers" element={<PrivateRoute element={PlanetNumbers} />} />
        <Route path="/life_cycles" element={<PrivateRoute element={LifeCycle} />} />
        <Route path="/life_changes" element={<PrivateRoute element={LifeChanges} />} />
        <Route path="/compatible_partners" element={<PrivateRoute element={CompaitablePartner} />} />
        <Route path="/partner_relationships" element={<PrivateRoute element={PartnerRelationships} />} />
        <Route path="/childrens" element={<PrivateRoute element={ChildrenPage} />} />
        <Route path="/compatibility_percentage" element={<PrivateRoute element={CompatibilityPercentage} />} />
        <Route path="/compatibility_description" element={<PrivateRoute element={CompatibiltyDesc} />} />
        <Route path="/DailyForecast" element={<PrivateRoute element={DailyForecast} />} />
        <Route path="/users" element={<PrivateRoute element={User} />} />
        <Route path="/usermessages" element={<PrivateRoute element={UserMessages} />} />
        <Route path="/general-settings" element={<PrivateRoute element={GeneralSettings} />} />
        <Route path="/payment" element={<PrivateRoute element={PaymentSetting} />} />
        <Route path="/userDetailedData" element={<PrivateRoute element={UserDetailedData} />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
export default App;
