import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from './Home';
import ShowDetail from './ShowDetail';
import './App.css';

const router = createBrowserRouter([
    {
        path: "",
        element: <Home />
    },
    {
        path: "show/:id",
        element: <ShowDetail />,
    }
]);

function App() {
  return (
    <div className="app">
        <div className="header">TVMaze Shows</div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
