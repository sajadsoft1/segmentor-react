import React, { Fragment, useState } from 'react'
import AuthInput from '../../../Auth/authInput/AuthInput';
import { applyDiscountAction, setPackageUuid } from '../../../Redux/Action/plan';
import { useDispatch, useSelector } from 'react-redux';
import AuthButton from '../../../Auth/authButton/AuthButton';

export default function BuyPlan() {




  // const [free, setFree] = useState(false);

  const [plan, setPlan] = useState("");
  // debugger
  // const [showModal, setShowModal] = useState(true);
  const [discountInputGold, setDiscountInputGold] = useState("");
  const [discountInputBronze, setDiscountInputBronze] = useState("");
  const [discountInputSilver, setDiscountInputSilver] = useState("");
  const [discountInputDiamond, setDiscountInputDiamond] = useState("");

  const { webAdress, charKey1, charKey2, site1, site2, commercialPage1, commercialPage2, planChosen, discount, forceUpdate } = useSelector(state => state.planState);

  const dispatch = useDispatch();

  const handleShowArrowDiscount = (text, arrowTarget) => {
    // debugger
    if (discountInputGold != "" && arrowTarget != "gold") { setDiscountInputGold(""); }
    if (discountInputBronze != "" && arrowTarget != "bronze") { setDiscountInputBronze(""); }
    if (discountInputSilver != "" && arrowTarget != "silver") { setDiscountInputSilver(""); }
    if (discountInputDiamond != "" && arrowTarget != "diamond") { setDiscountInputDiamond(""); }
    switch ("bronze") {
      case "gold":
        setDiscountInputGold("text");
        break;
      case "bronze":
        if (discountInputBronze != text) {
          setDiscountInputBronze(text);
        }
        break;
      case "silver":
        setDiscountInputSilver(text);
        break;
      case "diamond":
        setDiscountInputDiamond(text);
        break;

      default:
        break;
    }
  }











  return (
    <div className='plans_body_container buy_plan_section'>
      <div className='badge_title'>
        <div></div>
        <p>خرید اشتراک سگمنتو</p>
      </div>
      <div className='main_buy_plan_section'>


        <div className='section_title'>
          <div>
            <p>رایگان شروع کنید؛ قدرتمند ادامه دهید</p>
            <button className="btn_more_information_plan">توضیحات بیشتر</button>
          </div>
        </div>
        {/* <body className='plans_body_container'> */}
          <div className='plan_cards_container'>
            <div className='bronze plan_card'>
              <span className='title'>برنزی</span>
              <hr />
              <div className='plan'>
                <div className='container_row' onClick={() => { setPlan("bronze_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == "bronze_1" ? true : false} />
                    <p> 1 ماهه</p>
                  </div>
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
                </div>
              </div>
              <div className='price'>
                <p style={plan.substring(0, 1) == "b" ? { color: "rgba(10, 101, 205, 1)" } : null}>79 هزار تومان ماهانه</p>
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
                />
                <span className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze))}></span>
              </div>
            </div>
            <div className='bronze plan_card'>
              <span className='title'>برنزی</span>
              <hr />
              <div className='plan'>
                <div className='container_row' onClick={() => { setPlan("bronze_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == "bronze_1" ? true : false} />
                    <p> 1 ماهه</p>
                  </div>
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
                </div>
              </div>
              <div className='price'>
                <p style={plan.substring(0, 1) == "b" ? { color: "rgba(10, 101, 205, 1)" } : null}>79 هزار تومان ماهانه</p>
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
                />
                <span className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze))}></span>
              </div>
            </div>
            <div className='bronze plan_card'>
              <span className='title'>برنزی</span>
              <hr />
              <div className='plan'>
                <div className='container_row' onClick={() => { setPlan("bronze_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == "bronze_1" ? true : false} />
                    <p> 1 ماهه</p>
                  </div>
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
                </div>
              </div>
              <div className='price'>
                <p style={plan.substring(0, 1) == "b" ? { color: "rgba(10, 101, 205, 1)" } : null}>79 هزار تومان ماهانه</p>
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
                />
                <span className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze))}></span>
              </div>
            </div>
            <div className='bronze plan_card'>
              <span className='title'>برنزی</span>
              <hr />
              <div className='plan'>
                <div className='container_row' onClick={() => { setPlan("bronze_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == "bronze_1" ? true : false} />
                    <p> 1 ماهه</p>
                  </div>
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
                </div>
              </div>
              <div className='price'>
                <p style={plan.substring(0, 1) == "b" ? { color: "rgba(10, 101, 205, 1)" } : null}>79 هزار تومان ماهانه</p>
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
                />
                <span className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze))}></span>
              </div>
            </div>
          </div>
          <div className='container_plan_message mt-5 rounded-lg'>
          <img src="./img/modal/footer/planInfoMessage.svg" className='inline-block mr-3' alt="" />
          <span className='py-2.5 mr-3 inline-block text-sm '>با خرید اشتراک 12 ماهه طلایی شما فقط مبلغ 10 ماه رو پرداخت میکنید؛ 2 ماه مهمون سگمنتو باشین</span>
        </div>
        <button className='btn-style m-auto mt-4'>فعالسازی اشتراک<span className='forward-ico'></span></button>
        {/* </body> */}
        <div className='footer_message'>
          <p>اگر بیزینس هستید یا به امکانات و منابع بیشتری نیاز دارید: </p>
          <button className="btn_more_information_plan">توضیحات بیشتر</button>
        </div>
      </div>
    </div>
  )
}
