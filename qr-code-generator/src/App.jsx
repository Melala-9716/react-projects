import QRCodeForm from './components/QRCodeForm.jsx';
import { QrCode } from "lucide-react";
function App() {
  return (
    <div>
      <div className='flex justify-between items-center m-[40px] lg:mx-[100px]'>
          <div className='flex items-center gap-[5px] '>
           <QrCode size={50} className='p-[1px] border border-amber-50 rounded-[6px] bg-blue-500 text-white'></QrCode>
           <p className='text-[20px] italic font-bold'>QR Studio</p>
          </div>
          <p className='bg-green-200 h-[26px] w-[70px] text-center rounded-[9px] hover:bg-green-100 italic'>
            Free tool
          </p>
      </div>
      <h1 className='text-center text-[30px] font-semibold'>Create your QR code</h1>
      <p className='text-center text-[20px]'>Turn any link or text into a scannable QR code.</p>
      <QRCodeForm />
    </div>
  );
}

export default App;