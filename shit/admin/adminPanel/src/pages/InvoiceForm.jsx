import { useState,useEffect,useRef } from 'react';
import './InvoiceForm.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InvoiceForm = () => {
  const [AccountNo,setAccountNo]=useState('');
  const [bankName,setbankName]=useState('');
  const [address,setAddress]=useState('');
  const [IFSC,setIFSC]=useState('');
  const [GSTNo,setGSTNo]=useState('');  ///GST No is customers 
  const [companyName, setCompanyName] = useState('');
  const [gstid, setGSTID] = useState('');
  const [rows, setRows] = useState([{ product: '', unit: 0, price: 0, amount: 0 }]);
  const [currentDate, setCurrentDate] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [email, setEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  
  useEffect(() => {
    // Update current date when the component mounts
    const currentDate = new Date().toLocaleDateString();
    setCurrentDate(currentDate);
    const uniqueInvoiceNumber = generateInvoiceNumber();
    setInvoiceNumber(uniqueInvoiceNumber);
  }, []);


  const generateInvoiceNumber = () => {
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `${datePart}-${randomPart}`;
  };
  const addRow = () => {
    setRows([...rows, { product: '', unit: 0, price: 0, amount: 0 }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    updatedRows[index].amount = updatedRows[index].unit * updatedRows[index].price;
    setRows(updatedRows);
  };
  
  const deleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const calculateTotal = () => {
    const total=rows.reduce((total, row) => total + row.amount, 0);
    return total.toFixed(2);
  };
  const calculateGrandTotal = () => {
    const totalAmount = rows.reduce((total, row) => total + row.amount, 0);
    const sgst = (totalAmount * 9) / 100; // Replace sgstRate with your SGST rate
    const cgst = (totalAmount * 9) / 100; // Replace cgstRate with your CGST rate
    const grandTotal = totalAmount + sgst + cgst;
    return grandTotal.toFixed(2);
  };
  const calSgst=()=>{
    const totalAmount = rows.reduce((total, row) => total + row.amount, 0);
    const sgst = (totalAmount * 9) / 100;
    return sgst
  }
  const calCgst=()=>{
    const totalAmount = rows.reduce((total, row) => total + row.amount, 0);
    const cgst = (totalAmount * 9) / 100;
    return cgst
  }
  const navigate=useNavigate()
  const handleBack = () => {
    navigate('/orders');
    window.close();
  };
  const generatePDF = async () => {
    const input = document.getElementById('invoice-container');
  
    if (!input) {
      console.error('Unable to find the container for PDF generation');
      return;
    }
  
    // Temporarily hide the Generate PDF button
    const generatePdfButton = document.getElementById('generatePdfButton');
    if (generatePdfButton) {
      generatePdfButton.style.display = 'none';
    }
    
    const canvas = await html2canvas(input);
  
    // Show the Generate PDF button again
    if (generatePdfButton) {
      generatePdfButton.style.display = 'block';
    }
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
  
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
  
    pdf.save('invoice.pdf');
    
  };
  
  const useIsDarkMode = () => {
    const theme = useTheme();
    return theme.palette.mode === 'dark';
  };
  
  const isDarkMode = useIsDarkMode();
return (
    <div id="invoice-container" className="invoice-container">
      <Button variant="outline-primary" onClick={handleBack}>Back</Button>
      {/* GST ID */}
      <div className="top-left">
        <p>GST ID: {gstid}</p>
      </div>
      
      {/* Cell Number */}
      <div className="top-right">
        <p>Cell: {phonenumber}</p>
      </div>
      
      {/* Invoice Heading */}
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h4 className="invoice-heading">Tax-Invoice</h4>
        <label className="block text-gray-700 text-sm font-bold mb-2">Company Name:</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
          className="appearance-none border border-gray-100 rounded w-48 py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
      </div>

      {/* Invoice Date and Number */}
      <div className="invoice-header"  style={{ display: "flex", justifyContent: "center" }}>
        <div className="title-date">
          <p>Date:{currentDate}</p>
          {/* <h6 className="invoice-date">{currentDate}</h6> */}
        </div>
        <div className="space"></div>
        <p className="invoice-number" style={{ whiteSpace: "nowrap", textAlign: "center", marginRight: "100px"}}>Invoice Number: {invoiceNumber}</p>
      </div>
---------------------------------------------------------------------------------------------------------------------------------
<div>
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
  Customer name:   
</label>
        <input
           
          type="text"
          placeholder="Customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="appearance-none border border-gray-100 rounded w-48 py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />

<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankName" style={{marginLeft:30}}>
          Address:   
</label>
        <input          
          type="text" size={100}
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="appearance-none border border-gray-100 rounded w-48 py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <br></br>
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankName">
          GST NO:   
</label>
        <input
          
          type="text"
          placeholder="GST No"
          value={GSTNo}
          onChange={(e) => setGSTNo(e.target.value)}
          className="appearance-none border border-gray-100 rounded w-48 py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankName" style={{marginLeft:80}}>
          Phone No:   
</label>
        <input
          
          type="phone"
          placeholder="Phone No"
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="appearance-none border border-gray-100 rounded w-48 py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />

</div>
      {/* Invoice Body */}
      <div className="invoice-body">
      <table className="table table-striped table-bordered table-hover employees-table w-100">
  <colgroup>
    <col style={{ width: '25%' }} /> {/* PRODUCT column width */}
    <col style={{ width: '15%' }} /> {/* UNIT column width */}
    <col style={{ width: '20%' }} /> {/* PRICE column width */}
    <col style={{ width: '20%' }} /> {/* AMOUNT column width */}
    <col style={{ width: '20%' }} /> {/* ACTION column width */}
  </colgroup>
  <thead>
    <tr>
      <th>PRODUCT</th>
      <th>UNIT</th>
      <th>PRICE</th>
      <th>AMOUNT</th>
      <th>ACTION</th>
    </tr>
  </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} >
                <td><input type="text" value={row.product} onChange={(e) => handleInputChange(index, 'product', e.target.value)} /></td>
                <td><input type="number" value={row.unit} onChange={(e) => handleInputChange(index, 'unit', parseInt(e.target.value))} /></td>
                <td><input type="number"   value={row.price} onChange={(e) => handleInputChange(index, 'price', parseFloat(e.target.value))} /></td>
                <td><input type="number"  value={row.amount} disabled /></td>
                <td><span className="material-icons" onClick={() => deleteRow(index)}><DeleteIcon/></span></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total, SGST, CGST, and Grand Total */}
            <div className="sum" style={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
            <span className="material-icons plus" style={{marginRight:"400px"}} onClick={addRow}>
  <span className="circle" ></span></span>
  
            <label style={{ marginRight: "10px" }}>Total:</label>
            <input type="text" value={calculateTotal()} placeholder="0.00" className="total" disabled />
            {/* Place the plus icon here */}
          
            </div>
        <div className="sum" style={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
          <label style={{ marginRight: "10px" }}>Add SGST:</label>
          <input type="text" value={calSgst()} className="sgst" disabled />
        </div>
        <div className="sum" style={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
          <label style={{ marginRight: "10px" }}>Add CGST:</label>
          <input type="text" value={calCgst()} className="cgst" disabled />
        </div>
        <div className="sum" style={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
          <label style={{ marginRight: "10px" }}>Grand Total:</label>
          <input type="text" value={calculateGrandTotal()} placeholder="0.00" className="total" disabled />
        </div>
      </div>

      {/* Add Row Button */}
      {/* <div className="float" onClick={addRow}><span className="material-icons plus"><AddIcon/></span></div> */}

      {/* Customer Details */}
      <div className="bank-details">
        <h3>Bank details</h3><br></br>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankName">
  Bank Name:   
</label>
<input
  id="bankName"
  type="text"
  placeholder="Bank Name"
  value={bankName}
  onChange={(e) => setbankName(e.target.value)}
  className="appearance-none border border-gray-100 rounded w-48 py-2 px-3 mb-4  leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
/>
        <br/>

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="AccountNo">
  Account no:   
</label>
        <input id="accNo"
          size={100}
          type="text" 
          placeholder="Account No"
          value={AccountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          className="appearance-none border border-gray-100 rounded w-64 py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        /><br/>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankName">
  IFSC Code:   
</label>
        <input
          id="ifsc" 
          type="text"
          placeholder="IFSC Code"
          value={IFSC}
          onChange={(e) => setIFSC(e.target.value)}
          className="appearance-none border border-gray-100 rounded w-48 py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
        <button id="generatePdfButton" className="button button2 d-block mr-0 ml-auto" onClick={generatePDF}>
          Generate PDF
        </button>
      </div>
    </div>
  );
};

export default InvoiceForm;