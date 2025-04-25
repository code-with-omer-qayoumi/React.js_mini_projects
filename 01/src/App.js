import "./App.css"
function App() {
  return (
    <div>
      <div className ="nav_background">
        <div className = "nav_container">
          <header className ="nav_header">
            <h1><a href="#" className ="nav_logo">Dark Blue</a></h1>
          </header>
          <nav>
            <ul className ="nav_ul">
              <li><a className ="nav_link active_link" href="#">Home</a></li>
              <li><a className ="nav_link" href="#">NEWS</a></li>
              <li><a className ="nav_link" href="#">Contact us</a></li>
              <li><a className ="nav_link" href="#">About us</a></li>

             
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default App;
