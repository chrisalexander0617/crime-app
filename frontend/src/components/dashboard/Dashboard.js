import {MenuRail} from './MenuRail'
import {DashboardView} from './DashboardView'
export const Dashboard = () => {
    return (<>
        <div className="wrapper">
            <MenuRail />
            <DashboardView />
        </div>
    </>)
}