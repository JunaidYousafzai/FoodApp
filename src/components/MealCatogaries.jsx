import React from "react";
import { useContext } from "react";
import { MealContext } from "../components/Context";
import Card from "./Card";
function MealCatogaries() {
  const { data } = useContext(MealContext);
  console.log(data, "this is data from home");
  const limitData = data.slice(0, 7);
  return (
    <>
    <div className="container mx-auto justify-center flex flex-wrap ">
        {limitData.map((item) => {
          return (
            <>
              {" "}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <Card
                idCategory={item.idCategory}
                strCategory={item.strCategory}
                strCategoryThumb={item.strCategoryThumb}
                strCategoryDescription={item.strCategoryDescription}
                />
                </div>
            </>
          );
        })}
      
      </div>
    </>
  );
}

export default MealCatogaries;
