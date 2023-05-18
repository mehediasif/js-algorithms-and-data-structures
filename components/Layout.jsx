import Navigation from "./Sidebar";

export default function Layout({children}){
    return (
        <div className="bg-slate-600 min-h-screen min-w-screen flex overscroll-contain">
          <Navigation />
          <div className="bg-white flex-grow rounded-md p-2 m-2">
          {children}
          </div>
          
        </div>
      )
}