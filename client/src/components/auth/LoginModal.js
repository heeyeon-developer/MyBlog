import React, {useState, useEffect} from 'react'
import {
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import {useDispatch, useSelector } from 'react-redux' 
import { CLEAR_ERROR_REQUEST, LOGIN_REQUEST} from '../../redux/types'

const LoginModal = () => {
    //다시 반응하기 위해서 이전것과 비교를 위해 상태관리가 중요
    //useState는 최근에 도입된 것 상태관리를 이전의 값을 묶어서 상태 관리
    const [modal, setModal] = useState(false)
    const [localMsg, setLocalMsg] = useState('')
    const [form, setValues] = useState({
        email: "",
        password: ""
    })
    //redux hooks - 간단하게 사용 가능
    const dispatch = useDispatch()
    const {errorMsg} = useSelector((state) => state.auth)
    useEffect(() => {
        try{
            setLocalMsg(errorMsg)
        }catch(e){
            console.log(e)
        }
    },[errorMsg])//에러가 있을때 함수를 작동시켜 주세요

    const handleToggle = () =>{
        dispatch({
            type:CLEAR_ERROR_REQUEST
        })
        setModal(!modal)
    }

    const onChange = (e) => {
        setValues({
            ...form,    //얕은 복사를 통해 계속 저장
            [e.target.name]: e.target.value
        })
    }
    //서버로 보내기 위해
    const onSubmit = (e) => {
        e.preventDefault()  //새로고침을 방지하기 위해
        const {email, password} = form
        const user = {email, password}
        console.log(user)
        dispatch({
            type: LOGIN_REQUEST,
            payload: user,
        })
     }
     return (
       <div>
         <NavLink onClick={handleToggle} href="#">
           Login
         </NavLink>
         <Modal isOpen={modal} toggle={handleToggle}>
           <ModalHeader toggle={handleToggle}>Login</ModalHeader>
           <ModalBody>
             {localMsg ? <Alert color="danger">(localMsg)</Alert> : null}
             <Form onSubmit={onSubmit}>
               <FormGroup>
                 <Label for="email">Email</Label>
                 <Input
                   type="emial"
                   name="email"
                   id="email"
                   placeholder="Email"
                   onChange={onChange} //꼭 달아줘야 함
                 />
                 <Label for="password">Password</Label>
                 <Input
                   type="password"
                   name="password"
                   id="password"
                   placeholder="Password"
                   onChange={onChange} //꼭 달아줘야 함
                 />
                 <Button color="dark" style={{ marginTip: "2rem" }}>
                   Login
                 </Button>
               </FormGroup>
             </Form>
           </ModalBody>
         </Modal>
       </div>
     );
}

export default LoginModal