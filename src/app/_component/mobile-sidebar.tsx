import {Menu} from 'lucide-react'
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import Sidebar from './sidebar';
const MobileSidebar = () => {
    return ( 
        <Sheet>
            <SheetTrigger className='sm:hidden pr-4 hover:opacity-75 transition'>
                <Menu />
            </SheetTrigger>
            <SheetContent side='left' className='p-0 bg-white'>
                <div className='h-full border-r flex flex-col overflow bg-white shadow_sm'>
                   <Sidebar />
                </div>
            </SheetContent>
        </Sheet>
    )
}
 
export default MobileSidebar;