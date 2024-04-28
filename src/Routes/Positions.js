import { Col, Row, Table, Segmented } from 'antd'
import React from 'react'
import './../Styles/Routes/Positions.css'
import {
    PlusOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux';

const Positions = () => {

    const {
        rex_data_user,
    } = useSelector(({top}) => top)

    const columns = [
        {
            title: '',
            dataIndex: 'pos',
            key: 'pos',
            align: 'center',
            render : (_, record, index) => {
                return <>
                    {
                        rex_data_user.tornombre == 'CA'
                        ? <div className={`Cell-Position ${index + 1 <= 2 ? 'Direct-Classification': ''}`}>
                            {index+1}
                        </div>
                        : <div className={`Cell-Position ${index + 1 <= 6 ? 'Direct-Classification': index + 1 == 7 ? 'Playoff-Classification' :''}`}>
                            {index+1}
                        </div>
                    }

                </>
            },
            width:'40px'
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
                        src='https://res.cloudinary.com/josecruz9/image/upload/v1712374858/qsaornariwc7xab8qqxx.png'
                    />
                    <div>ARG</div>
                </div>
            },
            width:'80px'
        },
        {
            title: 'PJ',
            dataIndex: 'pj',
            key: 'pj',
            align: 'center'
        },
        {
            title: 'G:P',
            dataIndex: 'pg',
            key: 'pg',
            align: 'center'
        },  
        {
            title: 'E',
            dataIndex: 'pe',
            key: 'pe',
            align: 'center'
        },
        {
            title: 'G',
            dataIndex: 'goals',
            key: 'goals',
            align: 'center'
        },  
        {
            title: 'DG',
            dataIndex: 'dg',
            key: 'dg',
            align: 'center'
        },
        {
            title: 'Ptos',
            dataIndex: 'ptos',
            key: 'ptos',
            align: 'center'
        },
        {
            title: 'Forma',
            dataIndex: 'forma',
            key: 'forma',
            align: 'center',
            render : (_, record, index) => {
                return <div className='Container-Last-Games'>
                    <div className='Game-Lost'>P</div>
                    <div className='Game-Won'>G</div>
                    <div className='Game-Draw'>E</div>
                    {
                        rex_data_user.tornombre == 'CA'
                        ? null
                        : <div className='Icon-See-More'>
                            <PlusOutlined style={{fontSize:'12px', color:'#FFFFFF'}} />
                        </div>
                    }
                    
                </div>
            },
            width:'100px'
        },
    ];

    const dataSourceEM = [
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
        {
            key: '5',
            pos: 5,
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
            key: '6',
            pos: 6,
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
            key: '7',
            pos: 7,
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
            key: '8',
            pos: 8,
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
            key: '9',
            pos: 9,
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
            key: '10',
            pos: 10,
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
                    dataSource={rex_data_user.tornombre == 'CA' ? dataSourceCA : dataSourceEM }
                    pagination={{
                        position:['none','none']
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