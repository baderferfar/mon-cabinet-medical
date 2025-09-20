import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
    return (
        <div className="h-full border-r flex  overflow bg-white shadow_sm">
            
            <div className="p-6">
               <Logo /> 
            </div>
            <div className=" flex w-full">
                <SidebarRoutes />
            </div>

        </div>
        
    );
}
 
export default Sidebar;