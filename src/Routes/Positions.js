import { Col, Row, Table, Segmented, Popover } from 'antd'
import React, { useEffect } from 'react'
import './../Styles/Routes/Positions.css'
import {
    PlusOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { GetPositionsTournamentReducer } from '../Redux/Actions/Tournaments/Tournaments';

const Positions = () => {

    const {
        rex_data_user,
    } = useSelector(({top}) => top)

    const {
        rex_data_positions_tournament,
    } = useSelector(({tournaments}) => tournaments)

    const dispatch = useDispatch()

    const columns = [
        {
            title: '',
            dataIndex: 'pos',
            key: 'pos',
            align: 'center',
            render : (_, record, index) => {
                return <div style={{display:'flex', justifyContent:'center'}}>
                    {
                        rex_data_user.tornombre == 'CA'
                        ? <div className={`Cell-Position ${index + 1 <= 2 ? 'Direct-Classification': ''}`}>
                            {index+1}
                        </div>
                        : <div className={`Cell-Position ${index + 1 <= 6 ? 'Direct-Classification': index + 1 == 7 ? 'Playoff-Classification' :''}`}>
                            {index+1}
                        </div>
                    }

                </div>
            },
            fixed : 'left',
            width:'30px'
        },
        {
            title: '',
            dataIndex: 'selnombre',
            key: 'selnombre',
            align: 'center',
            render : (_, record, index) => {
                return <div style={{display:'flex', alignItems:'center'}}>
                    <img
                        width={30}
                        height={30}
                        src={record.selimagen}
                    />
                    <div>{record.selnombre}</div>
                </div>
            },
            fixed : 'left',
            width:'70px'
        },
        {
            title: 'PJ',
            dataIndex: 'pj',
            key: 'pj',
            align: 'center',
            width:'40px'
        },
        {
            title: 'G',
            dataIndex: 'pg',
            key: 'pg',
            align: 'center',
            width:'40px'
        },  
        {
            title: 'P',
            dataIndex: 'pe',
            key: 'pe',
            align: 'center',
            width:'40px'
        },
        {
            title: 'E',
            dataIndex: 'pe',
            key: 'pe',
            align: 'center',
            width:'40px'
        },  
        {
            title: 'DG',
            dataIndex: 'dg',
            key: 'dg',
            align: 'center',
            width:'40px'
        },
        {
            title: 'Ptos',
            dataIndex: 'ptos',
            key: 'ptos',
            align: 'center',
            width:'40px'
        },
        {
            title: 'Forma',
            dataIndex: 'forma',
            key: 'forma',
            align: 'center',
            render : (_, record, index) => {
                return <div className='Container-Last-Games'>
                    {
                        record.nextMatch
                        ?   <Popover
                                content={
                                    <div style={{display:'flex', gap:'10px', borderRadius:'10px'}}>
                                        <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                                            <img 
                                                height={15}
                                                width={15}
                                                src={record.nextMatch.parlocalsel.selimagen}
                                            />
                                            <span>{record.nextMatch.parlocalsel.selabreviacion}</span>
                                            
                                        </div>
                                        <div><span> - </span></div>
                                        <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                                            <img 
                                                height={15}
                                                width={15}
                                                src={record.nextMatch.parvisitasel.selimagen}
                                            />
                                            <span>{record.nextMatch.parvisitasel.selabreviacion}</span>
                                        </div>
                                    </div>
                                }
                                title={null} 
                                placement="leftBottom"
                                trigger="click"
                                className='Icon-See-More'
                            >
                            <PlusOutlined style={{fontSize:'12px', color:'#FFFFFF'}} />
                        </Popover>
                        : null
                    }
                    {
                        record.lastMatches.map(las => {
                            const resultMatch = las.parganador == record.selid 
                            ? 'Game-Won'
                            : las.parganador == null
                                ? 'Game-Draw'
                                : 'Game-Lost'
                            return <Popover 
                                        content={<div style={{display:'flex', gap:'10px'}}>
                                            <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                                                <img 
                                                    height={15}
                                                    width={15}
                                                    src={las.parlocalsel.selimagen}
                                                />
                                                <span>{las.parlocalsel.selabreviacion}</span>
                                                
                                            </div>
                                            <div><span>{las.pargoleslocal}</span> - <span>{las.pargolesvisita}</span></div>
                                            <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                                                <img 
                                                    height={15}
                                                    width={15}
                                                    src={las.parvisitasel.selimagen}
                                                />
                                                <span>{las.parvisitasel.selabreviacion}</span>
                                            </div>
                                        </div>} 
                                        title={null} 
                                        placement="leftBottom"
                                        trigger="click"
                                        > 
                                <div className={`${resultMatch}`}>
                                    {resultMatch == 'Game-Won' ? 'G' : resultMatch == 'Game-Draw' ? 'E' : 'P'}
                                </div>
                            </Popover>
                        })
                    }
                </div>
            },
            width:'90px'
        },
    ];


    const dataSourceCA = [
        {
            key: '1',
            pos: 1,
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '2',
            pos: 2,
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '3',
            pos: 3,
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '4',
            pos: 4,
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
    ]

    const getPositions = () => {
        dispatch(GetPositionsTournamentReducer())
    }

    useEffect(()=> {
        getPositions()
    },[])

    return (
        <Row style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'20px 10px'}}>
            <Col span={24} md={12}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Segmented
                        options={['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D']}
                        onChange={(value) => {
                        console.log(value); // string
                        }}
                    />

                </div>
                <Table
                    className={`Table-Positions ${rex_data_user.tornombre == 'EM' ? 'Table-EM':''}`}
                    columns={columns}
                    dataSource={rex_data_user.tornombre == 'CA' ? dataSourceCA : rex_data_positions_tournament }
                    pagination={{
                        position:['none','none']
                    }}
                    scroll={{
                        x:300,
                    }}
                />
                {
                    rex_data_user.tornombre == 'EM'
                    ? <div className='Container-Info-Table-EM'>
                        <div><div className='Icon-Direct-Classification'></div>Clasificado al mundial</div>
                        <div><div className='Icon-Playoff-Classification'></div>Repechaje</div>
                    </div>
                    :  <div className='Container-Info-Table-EM'>

                        <div><div className='Icon-Direct-Classification'></div>Clasificado 4tos</div>
                        
                    </div>
                }
                

            </Col>
        </Row>
    )
}

export default Positions