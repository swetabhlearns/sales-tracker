import React, { useState } from "react";
import "./result.css";
const Result = ({
  salesVal,
  pricepointVal,
  selectVal,
  downsellVal,
  masterClassVal,
}) => {
  return (
    <div className="result">
      {pricepointVal && selectVal ? (
        <div className="result__container">
          <div className="result__current__revenue">
            <h4>
              Your current annual revenue from conversion rate is:
              <span>
                <h1>
                  ${pricepointVal * salesVal * selectVal * masterClassVal}
                </h1>
              </span>
            </h4>
          </div>
          <div className="result__conversion__rate">
            <h4>
              If your conversion rate increased by 10%(and nothing else
              changed):
              <span>
                <h1>
                  $
                  {1.01 * pricepointVal * salesVal * selectVal * masterClassVal}
                </h1>
              </span>
            </h4>
          </div>
          <div className="result__pricepoint">
            <h4>
              If your pricepoint increased by 10% each launch(and nothing else
              changed):
              <span>
                <h1>
                  ${1.1 * pricepointVal * salesVal * selectVal * masterClassVal}
                </h1>
              </span>
            </h4>
          </div>
          <div className="result__sales_call">
            <h4>
              If your number of calls increased by 25% each launch(and nothing
              else changed):
              <span>
                <h1>
                  $
                  {1.25 * pricepointVal * salesVal * selectVal * masterClassVal}
                </h1>{" "}
              </span>
            </h4>
          </div>
          <div className="result__forecast">
            <hr></hr>
            <h4>
              If all 3 of those happened, your annual revenue would be:
              <span>
                <h1 className="final__forecast">
                  $
                  {downsellVal
                    ? 3.5 *
                      pricepointVal *
                      salesVal *
                      selectVal *
                      downsellVal *
                      masterClassVal
                    : 3.5 *
                      pricepointVal *
                      salesVal *
                      selectVal *
                      masterClassVal}
                </h1>
              </span>
            </h4>
          </div>
        </div>
      ) : (
        <div className="result__preview">
          <h1>Please Enter Price Point and period of Conversion Event.</h1>
        </div>
      )}
    </div>
  );
};

export default Result;
