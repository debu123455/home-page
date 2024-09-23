import React from 'react';
import './App.css';


 export default function Homepage() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <img src="data:image/jpeg;base64,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" alt="Printify Logo" />
        </div>
        <nav className="app-nav">
          <ul>
            <li>
              <a href="#">Catalog</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Use-cases</a>
            </li>
            <li>
              <a href="#">Need help?</a>
            </li>
            <li>
              <a href="#" className="login-btn">
                Log in
              </a>
            </li>
            <li>
              <a href="#" className="signup-btn">
                Sign up
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <br></br>
      <br></br>
      <br></br>
      <main className="app-main">
        <div className="hero-section">
          <div className="hero-text">
            <h1>Create and sell custom products</h1>
            <ul className="hero-features">
              <li>
                <i className="fa fa-check-circle"></i> 100% Free to use
              </li>
              <li>
                <i className="fa fa-check-circle"></i> 900+ High-Quality Products
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Largest global print network
              </li>
            </ul>
            
            <div className="hero-buttons">
              <button className="start-btn">Start for free</button>
              <button className="how-it-works-btn">How it works?</button>
            </div>
            <p className="hero-trust">Trusted by over 8M sellers around the world</p>
          </div>

          <div className="hero-image">
            <img src="https://printify.com/pfh/assets/animations/images/img_5.png" alt="Hero Image" />
            <img src="https://www.shutterstock.com/image-vector/success-fruit-hard-work-quotes-260nw-2456534321.jpg" alt="Hero Image" />
            
          </div>


          
            
        
         </div>
         <div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
         </div>
        
        <br></br>
        <br></br>
        <br></br>


        {/* cards */}
        
        <div className="container">
      <div className="image-container">
        <img src="https://printify.com/pfh/assets/legacy/higher-profits.svg" alt="Piggy bank" />
      </div>
      <div className="text-container">
        <h1>Higher Profits</h1>
        <p>
          We offer some of the lowest prices in the industry <br/>
          because print providers continuously<br/> compete to win
          your business.
        </p>
      </div>
    </div>


    <div className="container">
      <div className="image-container">
        <img src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" alt="Piggy bank" />
      </div>
      <div className="text-container">
        <h1>Robust Scaling</h1>
        <p>
        Easily handle peak holiday seasons, with our wide network of partners<br/> and automatic routing functionality.
        </p>
      </div>
    </div>
        

        
    <div className="container">
      <div className="image-container">
        <img src="https://printify.com/pfh/assets/legacy/best-selection.svg" alt="Piggy bank" />
      </div>
      <div className="text-container">
        <h1>Best Selection</h1>
        <p>
        With 900+ products and top quality<br/> brands, you can choose the best products for your business.
        </p>
      </div>
    </div>

    <div className="container">
      <div className="image-container">
        <img src="https://printify.com/pfh/assets/legacy/custom-products.png" />
      </div>
      <div className="text-container">
        <h1 className='color'> Create</h1>

        <h2>Custum Projects</h2>
        <p>
        Easily add your desings to a wide range of products using our free tools
        </p>
      </div>
    </div>


    
    <div className="container">
      <div className="image-container">
        <img src="https://printify.com/pfh/assets/legacy/your-products.png" />
      </div>
      <div className="text-container">
        <h1 className='color'> Sell</h1>

        <h2>On ypur team</h2>
        <p>
        You choose the products , sale price and where to sell
        </p>
      </div>
    </div>

    <div className="container">
      <div className="image-container">
        <img src="https://printify.com/pfh/assets/legacy/fullfillment.png" />
      </div>
      <div className="text-container">
        <h1 className='color'> We handle</h1>

        <h2>Fulfillment</h2>
        <p>
        Once an order is placed we automatically handle all the printing and deleivery logistics
        </p>
      </div>
    </div>

    <div className="banner">
      <div className="banner-text">
        
        <h2>Are you a large business <br/>looking for custom solutions?</h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div> 
        <button className='banner-button '>Talk to sales</button>
        </div>
      </div>
    </div>




{/* icon part */}

<div className="container">
      <div className="header">
        <h1>Connect your store</h1>
        <p>
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>
      </div>
      



      
      <div className="connections">
        <div className="central-app">

        <div className="platform">
          <img src="data:image/png;base64,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" alt="Squarespace" />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
        <div className="platform">
          <img src="data:image/jpeg;base64,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" alt="WooCommerce" />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div className="platform">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAAD+/v4EBAT7+/uXl5fn5+f4+PgVFRXu7u719fWfn5+6urrx8fHX19d1dXWsrKw0NDTHx8fBwcGNjY0sLCzg4OBHR0dRUVF9fX1XV1cgICCzs7NgYGBsbGw6OjqFhYWKSMOFAAAMYUlEQVR4nO1ca3ejOAw1jnkHQoAQSAjw/3/lWpZsDKHTnrO04YPvzs6kDhBdy5L1cMqYg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4PDz8G5kH8YF3GccHhFo3I4KM55Iuhn+HN0cCEkGZY0RXvvcs4Eigx/V1fPew5FHiRMDgM+K+r3EKCLLPfvnkQLbNSwFLyJPIXo5ZdNCPwOT0YKmFST1MEJBB8CpjUjLnIMAOMPv8+TD0v6NcAEcKqDvhs94uJ5dYJvcNY/cZTeeD66tIwZKe5YkOYtjUUusPT19CxEvaIpWPDySCuajufdBz8+4lpDc27SNrKlldLfcqZcmn9SP5/Mm+rfqD0gF9AMC6ZrRBJ7s8RX9X5+t0laKD4s+BbkEmteKP7JFlq+HNKiKAb64eVHNpWTN3xa8g1wFtZaPuDyfAX9hh5aafJ52t70mvO87tOSbyKZjClEY5fLge6NS9SrfT9p/NcYIe3003JvwGjmJJ2un6uR5rEm8wJHjBFOefeUZsrPyr0J6cxStIZr2jDadMpxRSbHS4FpMCKZ+NOSb0BKeMZtvw3MSFgs9hyvxuBSefGcnNtHpf4CUr68VXM95vNotvBdr5giZSIDdG6fEvhfkPIFgzLp29kazsrU92uJaZrSgHFDhp+1Zz5gPANSTmrlRP7ijTBMCMKkMLACfYzT2k8I+x1gzn00g24xbP8A8RuNJhe103jekvpHYTIsELRDk35966DkPSJVVE6KuzhGgKZCYkwaE5+2wUfzg7tY8yTVeF1zEDJmHXFR6Hi5+9akgbs43zQbyf4gbDSUbIDx+z1d5QSiv4EmJZ02//aOv0DcF0Xf9+eq7O8UzEjP/H2hguOWesNo8/F5MtolAYXn9antuWdvZDbrMFI5CQVARyAjWGol9ZRD+pzc7/JaFcUsx+RlCURAMnvOP24zUsDbnAdTTuaH4KP5+kKFVakMLhN5Xsr/Pl+nkd7V0/5IkYGkMsGC5vraJAgyfZe5n69ZfxCc1WqRWTnykFmRlsAFF5TDU5XLotPlHKv7xNuiM1HOu7Xptxd2Z7bq/dbn1VtxCRifyfBQaiQflpnmUIabGz43e+9yGBWNb1hKNXfsRiZHc4ker7a938dxaBbTJ1hYvjSLk6cdxQPobJN5H/5q+9XM96tXUwHjBRXYMGsaqPzbzw5qz6o7nQyf+ttwZwEBYXeWhGbBscUa3YdMRhl+qmdamgi35rIcjDaMcvCf1zJGkOIE1ZkQLHhU1bkvUkiI/LSvykBQ0i0zQbw834GLSvBvSrLbRvQCys917dyuCJKaxkWUIF8VJiHtddIDf8cLg/NuQ5prW6FlUf9/LkqCiaZ5a9FIqq1V2Yzuj8fdTqDlDNhkdMlNYsqstRRYt+DEtAXZCeXjO2VDyQOf728aad6a/sXzci6bpsnLqrsZZdmFAk61UPUGRAOkGSSzKuk+ayZ2JiOfVo5q6iGu3GA66Mqm1+WZviDJJyPUI7EeVt0MGa8id6vJLCEfinXEXcmIGqfstfTHuLEzGUGiWu75QnEC6oI6wRRaBaFvmdeU6C4o02Sidhheo75gVF2QXZdZTLshPE0sQi6uin9IVW6j1g4JHcJAV9DHObrEsVuHTQPtzzSZk3eBUMjsv5G/O5nqio9uq4wzsSAjtUaTCCHBSmssvhCbLtTrqVTPaht0dpVpHGrNXGIVWcSUcAywQnddZqlZxvc+sLcX8Mp3KiM1y22Uq7BMrjS1BEft0XiBInN83rRaZicgI5SZXtFHNLuS4UhGO5q2z2yeYYoyPItVlEL7XfEkP0jvxNgt6PkLbWKOry3NqK3roQKJe74rGayJn+aNpLbNPKDF/Qi3HB3mpypfoB0qx35uoCeIjGlFZvbge2tG8KS42XvAvG0ItfeDWP1m3CTHekzqaJ0JbEo9BSvRz/kbZDCouKNmgn3JSDZh6ZMPAAHmziRnZxy9xkvrn5GhUHQTNak6KTsWRUahWc9kwGGGUDKAuly8Kxmm8q4wpydKwaySbEi+Ydg8HaMWPxoHNc1ibHsUqtWmxoN3MvCg8qrLv7uHMyBo2EjtqM8f57Qso20+ZV8kGxzb6OrAA1gfXi4Z8LO5E3NIIjMEPIzzicKEZ7k/GRL1jHJdmYkPNZn+62ZFj5J0MOMcg0wZ3ghO1nZTO60VAYyP+xjRGvAe7BfIKEJolPLz5+0xo77seea3RoWSXGA9ZWgoBVxKTtpTy2omM5smdEwyRfVXyDQqpATdv2vmSzJntGSlmRwFLaGDk6V6ndnLDKtZlAyNOfuFFICgJvPkRYWRPKktiTb4w4472ww0dcAQhqmToFRgEGxDM/JzRjwl9Qs2o+Qi0SH6I9G1N7ts6wX8ICXUKch8895xazbIRNdXXZqwbW8yUBVL+pZEN1Uf7ZPGzTql6mbQORrYZ95TFpC7WJBpfagBFFUg2K+RgT25u+kKUkIfJCOAJ5nB9j6jNgy46QrVg2KLDGiV2ymACIWZv18hI5/bt6YKaDLHOQm+bM8BYxPdAovp7RAH6gKdoxXOMLu2tnvaDK1y6n2BrzH1FtVIVpAzv6yikzT63EYdSv+B7bZx8hEXNCFov7+RWXz8npqRj2vmmgU+lKQWJu54wUa4qj5zllGOpc4LFJQrx0IiDIXW6rShmd8iAyIOpifjXXNIiVEHIG5H1QyZGdjJmaoaC53wD7DLYLZwKkxCZpdJ/4qMtIy7qSXVKKc+8yuY6b3WyaJKLq9KfNrKlWICXHHUBuUihMxNRRTnPyUTtDj9UVuSm9HejPOs08FHHSwSahH4nlYM+Nnz0y4kgkWpxQv7Ftz3JRm+MxnWod+Ect6bB25a7ZcedvU4rmhcF/soJ7US1VBXLYK5ovlPMvsUzlXlTmb6veqWLD9MT7kH58v7sgmyLG7K/mJ8b6S8H9Xe5R45369PrcHK+xGZ/88GOt9YXoDYd6PnU5iSpjSJ12WaLoN1dFsFbqaSebe7zTnFN+lc0Rzi1ePxnI4is4diYD5S7L5E771i6QNEYYluoCsgvurlsDxVsIs7LCzUmF8KOMGiXp7DVWYEdUa8tdyr2ZRRXd8PmaB91Jwnky/JLy0JqUA+6hPcP+XOorAQiMaUF9Qv3yWmW/c7rEYmoGIPcGdCcLunWap40m564ut7ebzvzpjs3avUzg7lysUcirj2FmuNspgYdaiesd2UnIOwr5uWO3//hjOqNUHYgjWIZYMW2pqrdOU2BerO9bmHjVfb7/8WuInfGyaypujShlMeiO+rrwX1r/H6BNyu4+OsynnM9Ly/qt/8uWagok/ZTE0FwdNZnTYRy4kWedUXRVHlekC/xbn2GZ+3IGkgZBTPk0eVZz9YrrXV/NnOB2vh56o6l9kByNDhZDqycNLV8PUBDNXv5m/fmKOuFLjDAxzRgnX28KykBmt0+YZ1m8OP3L5ftXG9Y5w3k/8Lk8Lj9ghsXvlXdr1GPpw0mc+vM0a9lVWwsm7+fQVdv4RldggyiW92xac5tWC+z/gvcH7WNwzZt1f/DWjZ3/1GoDUrnxb+xNsWukr1E+5/g+ZyawvMFBWxn5/tJXsb3/3fh7A0Dp1gzj1+KLosiwBzkIkdc++eHEUxyx2SkRkYzeA5zDiIAVmWhXYel2OeeS2PQmYBuQk+tQegEWhF9pfh0nXdNNV1mvOZDnWlVYf9YzJ/Ca7PjXWxdgB8VU2+W6fTqDMb1bvG8vthQgcA+TsX2DEql0nAI6f4kjF9ymMIj0mGvkOrT7hB/2Z5fBbbZdgNOVPR/ECu2QZvMXhWLTEsza6+DyippiodzYpWq8yclzsW6FQCNLnoPHbzeCvRQPszqa/zt9Ov1afl3gTuHDpEK2LdsVxoRppNfZovg7NZR9k1F6hWGf+9u1KPuIAzvbfF+XSPVANHaY9IJmjfC3+qTogHS4rTe1lwvJQ/zRj+FjICsH6FgcnXTnh0h6sz6svCUzuVqyjiMIAWnz9YJ2GpMKB6hCBvsnQH9O30Y5JRBbGgSrv7YpF5g/lFOpTLAaNoKHI6u3BoxHkxjYaKd9JVAaESMjSc4RzsVyf+Nag1I7KmnLR+Un18Cw4QYgjT5fHyzO1BwXUhOYnxdxzVwi5QJv2rrZuEfvqkoD8ClShVPy3Jq0b9IiqrTK6yNaqjfVhUBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBweD/wAgkn7He/saNAAAAABJRU5ErkJggg==" alt="WooCommerce" />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        
        <div className="platform">
          <img src="data:image/jpeg;base64,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" alt="Esty " />
        </div>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        

        <div className="platform">
          <img src="data:image/png;base64,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" alt="AND MORE " />
        </div>
      
        </div>
      </div>
    </div>
    


    <div className='comments'>
      <div className="comment">
        <h2>Trusted by over 8M sellers<br/> around the world</h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <h4>Whether you are just getting started or run an enterprise-level<br/>
         e-commerce business, we do everything <br/>
         we can to ensure a positive merchant experience.</h4>

      </div>
    </div>

    

    


    



    

      </main>
      
      <footer className="app-footer">
        <p>© 2024 Freeprint. All rights reserved.</p>
      </footer>
    </div>
    

    

  );

}

