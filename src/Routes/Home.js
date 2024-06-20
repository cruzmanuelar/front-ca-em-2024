import { Button, Col, Row, Typography, Divider, Affix } from "antd";
import { useEffect, useState } from "react";
import {
    BarChartOutlined,
    FormOutlined
} from '@ant-design/icons';

import { useDispatch, useSelector } from "react-redux";
import { GetDataNextMatchesReducer, GetDataStatisticsQuinelaReducer, ShowModalFormQuinelaReducer, ShowModalStatisticsQuinelaReducer } from "../Redux/Actions/Home/Home";
import './../Styles/Routes/Home.css'
import moment from "moment";
import ModalQuinela from "../Components/Home/ModalQuinela";
import ModalStatistics from "../Components/Home/ModalStatistics";

function Home() {

    const [ quinelaDone, setQuinelaDone ] = useState(false)

    const {
        rex_data_next_matches,
        rex_data_form_quinela
    } = useSelector(({home}) => home)
    const {
        rex_data_user,
    } = useSelector(({top}) => top)
    const dispatch = useDispatch()
    const { Title } = Typography

    const getNextMatches = async () => {
        await dispatch(GetDataNextMatchesReducer())
        await dispatch(GetDataStatisticsQuinelaReducer())
    }

    useEffect(() => {
        getNextMatches()
    },[])

    return (
        <Row style={{display:'flex', justifyContent:'center', padding:'5px', alignItems:'center'}}>
            <Col xs={24} sm={24} md={16}  style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'10px'}}>
                <div  className={`Title-Fixture Fixture-${rex_data_user.tornombre}`}>Mi Quinela - Proxima jornada</div>
                    {rex_data_next_matches.map((par, index) => (
                        <div 
                            key={index}
                            style={{border : '1px solid #592321', borderRadius:'10px', marginTop:'10px'}}
                        >
                            <Row style={{margin:'2px 0'}}>
                                <Col xs={6} sm={6} md={4} style={{display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', borderRight:'1px solid #ececec'}}>
                                    <div>
                                        {moment(par.parfecha).format('DD/MM/YY')}
                                    </div>
                                </Col>
                                <Col xs={18} sm={18} md={20}>
                                    <Row>
                                        <Col xs={20} sm={20} md={20}>
                                            <div style={{width:'100%', padding:'0 20px'}}>
                                                <div style={{display:'flex', alignItems:'center'}}>
                                                    <img
                                                        width={30}
                                                        height={30}
                                                        src={par.parlocalsel.selimagen}
                                                    />
                                                    <div>{par.parlocalsel.selnombre}</div>
                                                </div>
                                                <div style={{display:'flex', alignItems:'center'}}>
                                                    <img
                                                        width={30}
                                                        height={30}
                                                        src={par.parvisitasel.selimagen}
                                                    />
                                                    <div>{par.parvisitasel.selnombre}</div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={4} sm={4} md={4} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                            <div style={{display:'flex', gap:'5px', flexDirection:'column'}}>
                                                <div>{par.pru ? par.pru.prugoleslocal : '-'}</div>
                                                <div>{par.pru ? par.pru.prugolesvisita : '-'}</div>
                                                {/* <div>{par.pargoleslocal != null ? par.pargoleslocal : '-'}</div>
                                                <div>{par.pargolesvisita != null ? par.pargolesvisita : '-'}</div> */}
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/* <Divider style={{margin:'15px 0'}}/> */}
                        </div>
                    ))}
            </Col>
            <Col xs={24} sm={24} md={6} >
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <Affix offsetBottom={50}>
                        <Button 
                            block 
                            style={{backgroundColor:'#237804', color:'#FFFFFF'}}
                            onClick={()=> dispatch(ShowModalFormQuinelaReducer(true))}
                        >
                            <FormOutlined />Editar Quinela
                        </Button>
                    </Affix>
                    <Affix offsetBottom={10}>
                        <Button 
                            onClick={()=> dispatch(ShowModalStatisticsQuinelaReducer(true))}
                            block 
                            style={{backgroundColor:'#0958d9', color:'#FFFFFF'}}
                        ><BarChartOutlined />Otras Quinelas</Button>
                    </Affix>
                </div>
            </Col>
            <ModalQuinela/>
            <ModalStatistics/>
        </Row>
    );
}

export default Home;