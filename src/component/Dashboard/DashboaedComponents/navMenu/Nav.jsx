import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import { changeRegisterCompleteCheck, coreUser, findUserAction } from '../../../Redux/Action'
import getCookie from '../../../Utils/findUser'

export default function Nav({ path }) {

  const { checkRegisterComplete, forceUpdate, userData } = useSelector(state => state.userState)

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userToken = localStorage.getItem("token")

  //REGISTER COMPLETE => NAVIGATE TO VERIFY FORM
  if (checkRegisterComplete == true) {
    navigate("/dashboard/accountOperations/ValidateEmail")
    dispatch(changeRegisterCompleteCheck(false));
  }

  const checkChangePasswordComplete = localStorage.getItem("CHECNGEPASSWORD_COMPLETE");

  useEffect(() => {
    if (checkChangePasswordComplete == "true") {
      localStorage.removeItem("CHECNGEPASSWORD_COMPLETE")
      navigate("/dashboard/accountOperations/login")
    }
  }, [checkChangePasswordComplete])

  useEffect(() => {
    if (userToken) {
      // debugger
      dispatch(coreUser());
      if (userData.package_end_date != null) {
        navigate("/dashboard/PageCounter", { replace: true })
      } else {
        navigate("/dashboard", { replace: true })
      }
    }
  }, [userToken])

  return (
    <div id='nav-option-head' className='w-full flex items-center justify-between px-28'>
      <div className='flex justify-around items-center'>
        <div className="flex justify-center items-center pl-5">
          <span className='logo_nav option_segmento_logo' />
          <a href='#'>امکانات</a>
        </div>
        <div className="flex justify-center items-center pl-5">
          <span className='logo_nav course_video_logo' />
          <a href='#'>ویدئو آموزشی</a>
        </div>
        <div className="flex justify-center items-center pl-5">
          <span className='logo_nav diamond_price_logo' />
          <a href='#'>قیمت گذاری</a>
        </div>
        <di className="flex justify-center items-center pl-5" v>
          <span className='logo_nav cookie_communicate_logo' />
          <a href='#'>همکاری با آژانس ها</a>
        </di>
      </div>
      <div>
        <Link to={`/dashboard/accountOperations/${path}`} className='btn-style'>{path == "login" ? "ورود" : "ثبت نام"}</Link>
      </div>
      {forceUpdate > 0 ? "" : ""}
    </div>
  )
}
