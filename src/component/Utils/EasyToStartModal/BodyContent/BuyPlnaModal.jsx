import React, { useEffect, useState } from 'react'
import { applyDiscountAction, getAllPlanData, setPackageUuid } from '../../../Redux/Action/plan';
import { useDispatch, useSelector } from 'react-redux';
import AuthInput from '../../../Auth/authInput/AuthInput';

export default function BuyPlnaModal() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlanData());
  }, [])

  const [plan, setPlan] = useState("");

  const [discountInputGold, setDiscountInputGold] = useState("");
  const [discountInputBronze, setDiscountInputBronze] = useState("");
  const [discountInputSilver, setDiscountInputSilver] = useState("");
  const [discountInputDiamond, setDiscountInputDiamond] = useState("");
  const [lastSelectedDiscountInput, setLastSelectedDiscountInput] = useState("");
  // var lastSelectedDiscountInput="";


  const { discount, allPackageData } = useSelector(state => state.planState);
  console.log(allPackageData)

  const handleShowArrowDiscount = (text, arrowTarget) => {
    // debugger
    if (discountInputGold != "" && arrowTarget != "gold") { setDiscountInputGold(""); }
    if (discountInputBronze != "" && arrowTarget != "bronze") { setDiscountInputBronze(""); }
    if (discountInputSilver != "" && arrowTarget != "silver") { setDiscountInputSilver(""); }
    if (discountInputDiamond != "" && arrowTarget != "diamond") { setDiscountInputDiamond(""); }
    switch (arrowTarget) {
      case "gold":
        if (discountInputGold != text) {
          setLastSelectedDiscountInput("gold");
          setDiscountInputGold(text);
        }
        break;
      case "bronze":
        if (discountInputBronze != text) {
          setLastSelectedDiscountInput("bronze");
          setDiscountInputBronze(text);
        }
        break;
      case "silver":
        if (discountInputSilver != text) {
          setLastSelectedDiscountInput("silver");
          setDiscountInputSilver(text);
        }
        break;
      case "diamond":
        if (discountInputDiamond != text) {
          setLastSelectedDiscountInput("diamond");
          setDiscountInputDiamond(text);
        }
        break;

      default:
        break;
    }
  }

  debugger
  let p;
  var dd="79000";
  p= dd.substring(0,dd.length-3);
  // alert(p + "هزار تومان ماهانه");
  // if(allPackageData.length>1)
  // {
  //   dd=allPackageData[1].price
  // }
  return (
    <body className='plans_body_container'>
      {/* <p className='text_information'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است .
      </p> */}
      <div className='plan_cards_container mt-7'>
        <div className='bronze plan_card'>
          <span className='title'>برنزی</span>
          <hr />
          <div className='plan'>
            {allPackageData.map(item => {
              debugger
              if (item.type_text == "برنزی") {
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
              }
            })}
            {/* <div className='container_row' onClick={() => { setPlan("bronze_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "bronze_1" ? true : false} />
                <p> 1 ماهه</p>
              </div>
              <span className='off_price'></span>
            </div>
            <div className='container_row' onClick={() => { setPlan("bronze_3"); dispatch(setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "bronze_3" ? true : false} />
                <p> 3 ماهه</p>
              </div>
              <span className='off_price'>15 درصد تخفیف</span>
            </div>
            <div className='container_row' onClick={() => { setPlan("bronze_6"); dispatch(setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "bronze_6" ? true : false} />
                <p> 6 ماهه</p>
              </div>
              <span className='off_price'>فقط پرداخت 5 ماه</span>
            </div>
            <div className='container_row' onClick={() => { setPlan("bronze_12"); dispatch(setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "bronze_12" ? true : false} />
                <p> 12 ماهه</p>
              </div>
              <span className='off_price'>فقط پرداخت 10 ماه</span>
            </div> */}
          </div>
          <div className='price'>
            <p style={plan.substring(0, 1) == "b" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[1].price.toString().substring(0,allPackageData[1].price.toString().length-3)+" هزار تومان ماهانه":""}</p>
          </div>
          <div className='input_apply_token_container'>
            <AuthInput
              textLabelInput=" کد تخفیف  "
              width={"100%"}
              typeInput="text"
              direction={"rtl"}
              handleArrowPlan={handleShowArrowDiscount}
              targePlanArrow={"bronze"}
              disabled={discount != "" ? true : false}
              errorTextId={lastSelectedDiscountInput == "bronze" ? "discount" : ""}
            // isPassword={true}
            // reduxHandleChange={setPasswordConfirmRedux}
            />
            <span className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze))}></span>
          </div>
        </div>
        <div className='silver plan_card'>
          <span className='title'>نقره ای</span>
          <hr />
          <div className='plan'>
          {allPackageData.map(item => {
              debugger
              if (item.type_text == "نقره ای") {
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
              }
            })}
            {/* <div className='container_row' onClick={() => { setPlan("silver_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "silver_1" ? true : false} />
                <p> 1 ماهه</p>
              </div>
            </div>
            <div className='container_row' onClick={() => { setPlan("silver_3"); dispatch(setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "silver_3" ? true : false} />
                <p> 3 ماهه</p>
              </div>
              <span className='off_price'>15 درصد تخفیف</span>
            </div>
            <div className='container_row' onClick={() => { setPlan("silver_6"); dispatch(setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "silver_6" ? true : false} />
                <p> 6 ماهه</p>
              </div>
              <span className='off_price'>فقط پرداخت 5 ماه</span>
            </div>
            <div className='container_row' onClick={() => { setPlan("silver_12"); dispatch(setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "silver_12" ? true : false} />
                <p> 12 ماهه</p>
              </div>
              <span className='off_price'>فقط پرداخت 10 ماه</span>
            </div> */}
          </div>
          <div className='price'>
            <p style={plan.substring(0, 1) == "s" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[5].price.toString().substring(0,allPackageData[5].price.toString().length-3)+" هزار تومان ماهانه":""}</p>
          </div>
          <div className='input_apply_token_container'>
            <AuthInput
              textLabelInput=" کد تخفیف  "
              width={"100%"}
              typeInput="text"
              direction={"rtl"}
              handleArrowPlan={handleShowArrowDiscount}
              targePlanArrow={"silver"}
              disabled={discount != "" ? true : false}
              errorTextId={lastSelectedDiscountInput == "silver" ? "discount" : ""}
            // isPassword={true}
            // reduxHandleChange={setPasswordConfirmRedux}
            />
            <span className={`apply_token_ico ${discountInputSilver != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputSilver))}></span>
          </div>
        </div>
        <div className='gold plan_card'>
          <span className='title'>طلایی</span>
          <hr />
          <div className='plan'>
          {allPackageData.map(item => {
              debugger
              if (item.type_text == "طلایی") {
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
              }
            })}
            {/* <div className='container_row' onClick={() => { setPlan("gold_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "gold_1" ? true : false} />
                <p> 1 ماهه</p>
              </div>
            </div>
            <div className='container_row' onClick={() => { setPlan("gold_3"); dispatch(setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "gold_3" ? true : false} />
                <p> 3 ماهه</p>
              </div>
              <span className='off_price'>15 درصد تخفیف</span>
            </div>
            <div className='container_row' onClick={() => { setPlan("gold_6"); dispatch(setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "gold_6" ? true : false} />
                <p> 6 ماهه</p>
              </div>
              <span className='off_price'>فقط پرداخت 5 ماه</span>
            </div>
            <div className='container_row' onClick={() => { setPlan("gold_12"); dispatch(setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "gold_12" ? true : false} />
                <p> 12 ماهه</p>
              </div>
              <span className='off_price'>فقط پرداخت 10 ماه</span>
            </div> */}
          </div>
          <div className='price'>
            <p style={plan.substring(0, 1) == "g" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[9].price.toString().substring(0,allPackageData[9].price.toString().length-3)+" هزار تومان ماهانه":""}</p>
          </div>
          <div className='input_apply_token_container'>
            <AuthInput
              textLabelInput=" کد تخفیف  "
              width={"100%"}
              typeInput="text"
              direction={"rtl"}
              handleArrowPlan={handleShowArrowDiscount}
              targePlanArrow={"gold"}
              disabled={discount != "" ? true : false}
              errorTextId={lastSelectedDiscountInput == "gold" ? "discount" : ""}
            // isPassword={true}
            // reduxHandleChange={setPasswordConfirmRedux}
            />
            <span className={`apply_token_ico ${discountInputGold != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputGold))}></span>
          </div>
        </div>
        <div className='diamond plan_card'>

          <span className='title'>الماسی</span>
          <hr />
          <div className='plan'>
          {allPackageData.map(item => {
              debugger
              if (item.type_text == "الماسی") {
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
              }
            })}
            {/* <div className='container_row' onClick={() => { setPlan("diamond_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "diamond_1" ? true : false} />
                <p> 1 ماهه</p>
              </div>
            </div>
            <div className='container_row' onClick={() => { setPlan("diamond_3"); dispatch(setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "diamond_3" ? true : false} />
                <p> 3 ماهه</p>
              </div>
              <span className='off_price'>15 درصد تخفیف</span>
            </div>
            <div className='container_row' onClick={() => { setPlan("diamond_6"); dispatch(setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "diamond_6" ? true : false} />
                <p> 6 ماهه</p>
              </div>
              <span className='off_price'>فقط پرداخت 5 ماه</span>
            </div>
            <div className='container_row' onClick={() => { setPlan("diamond_12"); dispatch(setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")) }}>
              <div>
                <input type="radio" name="radio" id="" checked={plan == "diamond_12" ? true : false} />
                <p> 12 ماهه</p>
              </div>
              <span className='off_price'>فقط پرداخت 10 ماه</span>
            </div> */}
          </div>
          <div className='price'>
            <p style={plan.substring(0, 1) == "d" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[13].price.toString().substring(0,allPackageData[13].price.toString().length-3)+" هزار تومان ماهانه":""}</p>
          </div>
          <div className='input_apply_token_container'>
            <AuthInput
              textLabelInput=" کد تخفیف  "
              width={"100%"}
              typeInput="text"
              direction={"rtl"}
              handleArrowPlan={handleShowArrowDiscount}
              targePlanArrow={"diamond"}
              disabled={discount != "" ? true : false}
              errorTextId={lastSelectedDiscountInput == "diamond" ? "discount" : ""}
            // isPassword={true}
            // reduxHandleChange={setPasswordConfirmRedux}
            />
            <span className={`apply_token_ico ${discountInputDiamond != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputDiamond))}></span>
          </div>
        </div>

      </div>
      <div className='container_plan_message mt-5 border rounded-lg'>
        <img src="./img/modal/footer/planInfoMessage.svg" className='inline-block mr-3' alt="" />
        <span className='py-2.5 mr-3 inline-block text-sm '>با خرید اشتراک 12 ماهه طلایی شما فقط مبلغ 10 ماه رو پرداخت میکنید؛ 2 ماه مهمون سگمنتو باشین</span>
      </div>
    </body>

  )
}