import { Button, Col, Input, Row, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetDataTournamentsReducer } from '../Redux/Actions/Tournaments/Tournaments';
import './../Styles/Routes/Login.css'
import { useNavigate } from 'react-router-dom';
import { validateLogin } from '../Functions/helpers/validateLogin';
import { notifyAlert } from '../Functions/notifications';
import { AuthLoginReducer } from '../Redux/Actions/Top/Top';

const Login = () => {

    const { Title } = Typography;

	const {
		rex_data_tournaments
    } = useSelector(({tournaments}) => tournaments)

    const navigate = useNavigate()

	const dispatch = useDispatch()

	const getTournaments = async () => {
		await dispatch(GetDataTournamentsReducer())
	}
    const [ tournament, setTournament] = useState(null)
    const [ formLogin, setFormLogin] = useState({
        tornid : 1,
        usuusuario : null,
        usucontrasenia : null
    })

    const sendLogin = () => {
        console.log(formLogin)
        const { response, message } = validateLogin(formLogin)
        if(!response){
            notifyAlert(message)
        }else{
            console.log("Va a login reducer")
            const response = dispatch(AuthLoginReducer(formLogin))
            if(response){
                navigate('/')
            }
        }
    }

    const onChangeInput = (e) => {
        setFormLogin({
            ...formLogin, [e.target.name] : e.target.value
        })
    }

    const onChangeSelect = ({tornid, torimagen}) => {
        setTournament(torimagen)
        localStorage.setItem('tornid', tornid)
        setFormLogin({
            ...formLogin, tornid: tornid
        })
    };

    
	useEffect(()=>{
		getTournaments()
	},[])

    return (
        <Row className='Container-Login'>
            <Col className='Card-Login'>
                <Title level={3} className='Text-Main'>La quinela de la bondad</Title>
                <div style={{display:'flex',justifyContent:'center', paddingBottom:'10px'}}>
                    <img
                        width={230}
                        height={240}
                        // src={tournament ? tournament : 'https://res.cloudinary.com/josecruz9/image/upload/v1712374907/tm3gidyzcpx3k2zlskev.png'}
                        src='https://res.cloudinary.com/josecruz9/image/upload/v1712373465/zrkbejv5skotj8ciafpo.png'
                        alt='Icono torneo'
                    />
                </div>
                <div>
                <Select
                    value={1}
                    placeholder='Seleccionar torneo'
                    options={rex_data_tournaments}
                    onChange={(text, index)=> onChangeSelect(index)}
                />
                </div>

                <div className='Container-Input'>
                    <Input name='usuusuario' onChange={onChangeInput} placeholder="Usuario" />
                    <Input.Password name='usucontrasena' onChange={onChangeInput} placeholder="Contrasena" />

                    <Button onClick={sendLogin} type="primary" htmlType="submit" block>
                        Ingresar
                    </Button>
                </div>
                <div className='Container-Redirect-Login'>
                    <span onClick={()=>{
                        navigate('/')
                    }}>No tengo cuenta</span>
                </div>
            </Col>
        </Row>
    )
}

export default Login