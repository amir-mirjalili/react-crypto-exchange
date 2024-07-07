import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';

import Box from '../../components/Common/Box';
import BankProcess from '../../components/Widgets/BankProcess/BankProcess';

const DashboardScreen = () => (
  <SiteLayout>
    <Header icon='sort' title='Deposit-Withdraw' />
    <div className='flex flex-destroy flex-space-between'>
      <div className='flex-1 box-right-padding'>
        <BankProcess />
      </div>
      <div className='flex-1'>
        <Box>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <div className='flex flex-center flex-space-between'>
              <p>Important</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; In EFT transfers, the recipient/beneficiary section must include Crypto
              Exchange.
            </p>
            <p>
              &bull;You can perform transfer/EFT transactions from all your individual, demand
              deposit, Iranian Rial accounts opened in your name to the listed accounts. Transfers
              from accounts belonging to different individuals will not be accepted.
            </p>
            <p>
              &bull; Transfers made using ATMs (with or without a card) will not be accepted as it
              is not possible to verify the senders information.
            </p>
            <p>
              &bull; The amount you sent will be automatically reflected in your account by the
              system after verification, and there is no need to notify separately.
            </p>
            <p>
              &bull; Since you have completed the identity verification process, you do not need to
              enter a fixed deposit code in the explanation section.
            </p>
          </div>
        </Box>
      </div>
    </div>
    <div className='flex flex-destroy flex-space-between'>
      <div className='flex-1'>
        <Box>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <div className='flex flex-center flex-space-between'>
              <p>Important</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; You can make withdrawals to all bank accounts (individual, demand deposit, IRR)
              opened in your name. Transfers to accounts belonging to different individuals will not
              be processed.
            </p>
            <p>&bull; The minimum withdrawal amount is 10 IRR.</p>
            <p>&bull; A transaction fee of 3 IRR is charged during the withdrawal process.</p>
            <p>
              &bull; When you give a withdrawal order, this amount will be deducted from your
              available balance.
            </p>
            <p>
              &bull; You can cancel pending orders. In this case, the order amount will be
              re-credited to your available balance.
            </p>
            <p>
              &bull; Withdrawal orders given outside of banking hours will be processed as soon as
              banks resume operations.
            </p>
          </div>
        </Box>
      </div>
    </div>
  </SiteLayout>
);

export default DashboardScreen;
