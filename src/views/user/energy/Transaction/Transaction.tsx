import EnergyBreadCrumb from '@/views/user/energy/components/ui/EnergyBreadCrumb'
import TransactionTable from '@/views/user/energy/Transaction/TransactionTable'

export default  function Transaction() {
    return (<>
        <EnergyBreadCrumb title={'Transaction'} desc={'Manage All Traction From Here'}/>
        <div className={'bg-white  rounded-lg'}>
            <TransactionTable/>
        </div>
    </>)
}