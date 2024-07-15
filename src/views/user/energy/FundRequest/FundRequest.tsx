import EnergyBreadCrumb from '@/views/user/energy/components/ui/EnergyBreadCrumb'
import FundRequestForm from '@/views/user/energy/FundRequest/FundRequestForm'


export default  function FundRequest() {
    return (<>
        <EnergyBreadCrumb title={'Funding Requests'} desc={'Manage all the businesses on your portfolio here'}/>
        <div className={'bg-white rounded-lg'}>
            <FundRequestForm/>
        </div>
    </>)
}