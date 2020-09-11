import React from "react";

const PokemonList = ({ list, value }) => {

    list.length>0 && console.log(list[0].Name.split(value));

  return (
    <>
      <ul className="suggestions">
        {list.map((element) => {
          return (
            <li>
              <img src={element.img} alt="" />
              <div className="info">
                <h1>
                    {element.Name.split(value).map((e)=> (e==='')?<span className="hl">{value}</span>:e)}
                  {/* <span className="hl">{element.Name}</span> */}
                </h1>
                {element.Types.map((type) => (
                  <span className="type normal">{type}</span>
                ))}
                {/* <span className="type electric"></span> */}
              </div>
            </li>
          );
        })}

        {/* <li>
          <img
            src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
            alt=""
          />
          <div className="info">
            <h1>
              <span className="hl">Pika</span>chu
            </h1>
            <span className="type electric">Electric</span>
            <span className="type normal">Normal</span>
          </div>
        </li>
        <li>
          <img
            src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png"
            alt=""
          />
          <div className="info">
            <h1 className="no-results">No results</h1>
          </div>
        </li> */}
      </ul>
    </>
  );
};

export default PokemonList;
