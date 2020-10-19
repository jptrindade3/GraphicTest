
import './style.css';
import {Bar} from 'react-chartjs-2'
import React, {useState} from 'react';
/*import Table from 'react-bootstrap/Table'*/
import { Table } from 'reactstrap';
/*
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

*/

export default function Datacontainer() {
    const tableValues = {
        capJan: 55,  /*capacidade de janeiro*/
        atendJan: 8,
        capFev: 54,  /*capacidade de Fevereiro*/
        atendFev: 7,
        capMarc: 45,  /*capacidade de Marco*/
        atendMarc: 18,
        capAbr: 35,  /*capacidade de Abril*/
        atendAbr: 21,
        capMai: 65,  /*capacidade de Maio*/
        atendMai: 38,
        capJun: 50,  /*capacidade de Junho*/
        atendJun: 20,
        capJul: 35,  /*capacidade de Julho*/
        atendJul: 28,
        capAgo: 44,  /*capacidade de Agosto*/
        atendAgo: 33,
        capSet: 15,  /*capacidade de Setembro*/
        atendSet: 18,
        capOut: 27,  /*capacidade de Outubro*/
        atendOut: 28,
        capNov: 67,  /*capacidade de Novembro*/
        atendNov: 58,
        capDez: 42,  /*capacidade de Dezembro*/
        atendDez: 12,
    };


    const [tableData,setTableData]= useState(tableValues);
    function handleChange(e){ /*função para tomar conta dos dados enqaunto voce digita */
        
        const key = e.target.getAttribute('name');
        const value = e.target.value;
        setTableData({
            ...tableData, /* pegra todos os valores que eu tinha antes, mante-los, e so mudar o valor de capJan*/
            [key]:value
        
        });
    }
   
    const data = {
        labels: [
            'JAN',
            'FEV',
            'MAR',
            'ABR', 
            'MAI', 
            'JUN', 
            'JUL', 
            'AGO', 
            'SET', 
            'OUT', 
            'NOV', 
            'DEZ'
        ],
        datasets: [
            {
            
                label: 'Capacidade - Atendimento Realizado',
                data: [
                    (tableData.capJan - tableData.atendJan), /*isso para todos os 12 meses*/
                    (tableData.capFev - tableData.atendFev), 
                    (tableData.capMarc - tableData.atendMarc),
                    (tableData.capAbr - tableData.atendAbr),
                    (tableData.capMai - tableData.atendMai),
                    (tableData.capJun - tableData.atendJun),
                    (tableData.capJul - tableData.atendJul),
                    (tableData.capAgo - tableData.atendAgo),
                    (tableData.capSet - tableData.atendSet),
                    (tableData.capOut - tableData.atendOut),
                    (tableData.capNov - tableData.atendNov),
                    (tableData.capDez - tableData.atendDez),
               
                ],
                backgroundColor: 'rgba(5, 65, 178, 0.6)',
            }
        ]
    };


return(
<div className = 'main-data-container'>
            <h1 className='title-box'>Resultados Mensais</h1>
        <div className='graph-box'> 
            <h4 className='box-title-img'>
            <img src= "https://fontmeme.com/permalink/200908/3c2a63d85b55555e5f1fdbdd1f54f018.png"/>
            </h4>
            <Bar
                data ={data}
                options = {{
                    maintainAspectRatio: false /*pesquisar*/
               
                }}
            />

        </div>
    
        <div >
            <div>
                <h2 className='label-tabela'>Tabela</h2>
               <img src="https://fontmeme.com/permalink/200908/0c3fe7caea1104b9e9fbdc1e90cd00c9.png"/>   
            </div>

            <table className = 'table-style' >
                <thead>
                    <tr>
                        <th className='colum-top'>Data</th>
                        <th className='colum-top'>Demanda</th>
                        <th className='colum-top'>Capacidade</th>
                        <th className='colum-top'>Atendimento</th>
                        <th className='colum-top'>Planejado</th>
                        <th className='colum-top'>Atendimento Realizado</th>
                        <th className='colum-top'>Desvio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Janeiro</td>
                        <td>9</td>
                        <td><input type= 'number' value={tableData.capJan} onChange={(e)=> handleChange(e)} name ='capJan'/></td>
                        <td>54</td>
                        <td>56</td>
                        <td><input type= 'number' value={tableData.atendJan} onChange={(e)=> handleChange(e)} name ='atendJan'/></td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Fevereiro</td>
                        <td>34</td>
                        <td><input type= 'number' value={tableData.capFev} onChange={(e)=> handleChange(e)} name ='capFev'/></td>
                        <td>46</td>
                        <td>82</td>
                        <td><input type= 'number' value={tableData.atendFev} onChange={(e)=> handleChange(e)} name ='atendFev'/></td>
                        <td>54</td>
                    </tr>
                    <tr>
                        <td>Março</td>
                        <td>32</td>
                        <td><input type= 'number' value={tableData.capMarc} onChange={(e)=> handleChange(e)} name ='capMarc'/></td>
                        <td>23</td>
                        <td>65</td>
                        <td><input type= 'number' value={tableData.atendMarc} onChange={(e)=> handleChange(e)} name ='atendMarc'/></td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Abril</td>
                        <td>43</td>
                        <td><input type= 'number' value={tableData.capAbr} onChange={(e)=> handleChange(e)} name ='capAbr'/></td>
                        <td>54</td>
                        <td>33</td>
                        <td><input type= 'number' value={tableData.atendAbr} onChange={(e)=> handleChange(e)} name ='atendAbr'/></td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>Maio</td>
                        <td>23</td>
                        <td><input type= 'number' value={tableData.capMai} onChange={(e)=> handleChange(e)} name ='capMai'/></td>
                        <td>39</td>
                        <td>40</td>
                        <td><input type= 'number' value={tableData.atendMai} onChange={(e)=> handleChange(e)} name ='atendMai'/></td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Junho</td>
                        <td>33</td>
                        <td><input type= 'number' value={tableData.capJun} onChange={(e)=> handleChange(e)} name ='capJun'/></td>
                        <td>45</td>
                        <td>54</td>
                        <td><input type= 'number' value={tableData.atendJun} onChange={(e)=> handleChange(e)} name ='atendJun'/></td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>Julho</td>
                        <td>23</td>
                        <td><input type= 'number' value={tableData.capJul} onChange={(e)=> handleChange(e)} name ='capJul'/></td>
                        <td>34</td>
                        <td>38</td>
                        <td><input type= 'number' value={tableData.atendJul} onChange={(e)=> handleChange(e)} name ='atendJul'/></td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>Agosto</td>
                        <td>34</td>
                        <td><input type= 'number' value={tableData.capAgo} onChange={(e)=> handleChange(e)} name ='capAgo'/></td>
                        <td>56</td>
                        <td>66</td>
                        <td><input type= 'number' value={tableData.atendAgo} onChange={(e)=> handleChange(e)} name ='atendAgo'/></td>
                        <td>43</td>
                    </tr>
                    <tr>
                        <td>Setembro</td>
                        <td>47</td>
                        <td><input type= 'number' value={tableData.capSet} onChange={(e)=> handleChange(e)} name ='capSet'/></td>
                        <td>45</td>
                        <td>77</td>
                        <td><input type= 'number' value={tableData.atendSet} onChange={(e)=> handleChange(e)} name ='atendSet'/></td>
                        <td>37</td>
                    </tr>
                    <tr>
                        <td scope="row">Outubro</td>
                        <td>43</td>
                        <td><input type= 'number' value={tableData.capOut} onChange={(e)=> handleChange(e)} name ='capOut'/></td>
                        <td>33</td>
                        <td>21</td>
                        <td><input type= 'number' value={tableData.atendOut} onChange={(e)=> handleChange(e)} name ='atendOut'/></td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td scope="row">Novembro</td>
                        <td>45</td>
                        <td><input type= 'number' value={tableData.capNov} onChange={(e)=> handleChange(e)} name ='capNov'/></td>
                        <td>87</td>
                        <td>65</td>
                        <td><input type= 'number' value={tableData.atendNov} onChange={(e)=> handleChange(e)} name ='atendNov'/></td>
                        <td>54</td>
                    </tr>
                    <tr>
                        <td scope="row">Dezembro</td>
                        <td>44</td>
                        <td><input type= 'number' value={tableData.capDez} onChange={(e)=> handleChange(e)} name ='capDez'/></td>
                        <td>89</td>
                        <td>33</td>
                        <td><input type= 'number' value={tableData.atendDez} onChange={(e)=> handleChange(e)} name ='atendDez'/></td>
                        <td>28</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
            }