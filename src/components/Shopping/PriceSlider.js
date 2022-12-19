
const PriceSlider=()=>{

  
    return(
        <>
        <div className="all-slider">
            <div className="wrapper">
      <header className="price-title">
        <h2>Price Range</h2>
      </header>
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <input type="number" className="input-min" defaultValue={2500}></input>
        </div>
        <div className="separator">-</div>
        <div className="field">
          <span>Max</span>
          <input type="number" className="input-max" defaultValue={7500} ></input>
          
        </div>
      </div>
      <div className="slider">
        <div className="progress"></div>
      </div>
      <div className="range-input">
        <input type="range" className="range-min" min="0" max="10000" defaultValue={2500} step="100"></input>
        <input type="range" className="range-max"  min="0" max="10000" defaultValue={7500} step="100"></input>
      </div>
      
    </div>
    </div>
   </>
    )
}
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress= document.querySelector(".slider .progress");
    let priceGap = 1000;
    
    priceInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
            
            if((maxPrice - minPrice >= priceGap) && maxPrice <= 1000){
                if(e.target.className === "input-min"){
                    rangeInput[0].value = minPrice;
                    progress.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                }else{
                    rangeInput[1].value = maxPrice;
                    progress.style.right = 100 - (maxPrice / rangeInput[1].max) * 100+ "%";
                }
            }
        });
    });
    rangeInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);
  
          if((maxVal - minVal )< priceGap){
              if(e.target.className === "range-min"){
                  rangeInput[0].value = maxVal - priceGap
              }else{
                  rangeInput[1].value = minVal + priceGap;
              }
          }else{
              priceInput[0].value = minVal;
              priceInput[1].value = maxVal;
              progress.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
              progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
          }
      });
  });

 
export default PriceSlider