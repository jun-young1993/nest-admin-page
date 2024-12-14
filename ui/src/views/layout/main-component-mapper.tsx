import { DatabaseComponent } from "./components"

const MainComponentMapper = [{
    name: 'DataBase',
    children: <DatabaseComponent />
},{
    name: 'TEST',
    children: <div>test</div>
},{
    name: 'PROFILE',
    children: <div>profile</div>
}]
export default MainComponentMapper