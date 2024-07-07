import { memo, useState, useEffect } from 'react';

import Box from '../../Common/Box';

const BankProcess = memo(() => {
  const [tab, setTab] = useState(0);
  const [bankDetails, setBankDetails] = useState([]);
  const [selectedBank, setSelectedBank] = useState(1);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        name: 'Resalat Bank',
        branch: 'Amirmohammad Mirjalili',
        iban: 'IR01 0000 0000 0000 0000 0000 01',
        logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/9c2b1612950849.5626f510150b7.jpg',
      },
      {
        id: 2,
        name: 'Blue Bank',
        branch: 'Amirmohammad Mirjalili',
        iban: 'IR02 0000 0000 0000 0000 0000 02',
        logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQF84FDtsfUokA/company-logo_200_200/0/1635349349574?e=2147483647&v=beta&t=W_gmrByu9zhja6Tlq0_jJy1HYjDxW6xXM6F11riRJVc',
      },
    ];

    setBankDetails(dataArray);

    setSelectedBank(dataArray[0]);
  }, []);

  const handleViewOnChange = (e) => {
    e.preventDefault();

    const { value } = e.target;

    const findBank = bankDetails.find((item) => item.id === +value);

    setSelectedBank(findBank);
  };

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <div>
            <p>Deposit/Withdraw</p>
          </div>
          <ul>
            <li>
              <button
                type='button'
                className={tab === 0 ? 'active' : 'passive'}
                onClick={() => setTab(0)}
              >
                Deposit
              </button>
            </li>
            <li>
              <button
                type='button'
                className={tab === 1 ? 'active' : 'passive'}
                onClick={() => setTab(1)}
              >
                Withdraw
              </button>
            </li>
          </ul>
        </div>
      </div>
      {tab === 0 && (
        <div className='box-content box-horizontal-padding box-vertical-padding box-content-height-nobutton'>
          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='full-width'>
                  <label htmlFor='view'>View Bank Details</label>
                  <select name='view' id='view' onChange={handleViewOnChange}>
                    {bankDetails &&
                      bankDetails.map((item) => (
                        <option key={item.id.toString()} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className='full-width'>
                  <label htmlFor='iban'>Amount</label>
                  <input type='number' name='Amount' id='amount' placeholder='Enter Amount' />
                </div>
              </div>
            </div>
          </form>

          <div className='box-text flex flex-center flex-space-between'>
            {selectedBank && (
              <>
                <div className='bank-info box-horizontal-padding'>
                  <img height='35' src={selectedBank.logo} alt='Bank logo' draggable='false' />
                  <p>
                    <strong>
                      {selectedBank.name} - {selectedBank.branch}
                    </strong>
                    <br />
                    {selectedBank.iban}
                  </p>
                </div>
                <button type='button' className='pointer red no-select'>
                  <i className='material-icons'>content_copy</i>
                </button>
              </>
            )}
          </div>
          <button type='button' className='button button-purple button-medium button-block'>
            Deposit Money
          </button>
        </div>
      )}

      {tab === 1 && (
        <div className='box-content box-horizontal-padding box-vertical-padding box-content-height-nobutton'>
          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='full-width'>
                  <label htmlFor='iban'>Add IBAN</label>
                  <input type='text' name='iban' id='iban' placeholder='Enter IBAN number' />
                </div>
              </div>
            </div>
          </form>

          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='full-width'>
                  <label htmlFor='view'>My Saved IBANs</label>
                  <select name='view' id='view'>
                    <option value='ZB'>Blue Bank</option>
                  </select>
                </div>
              </div>
            </div>
          </form>

          <div className='box-text box-horizontal-padding center'>
            <p>
              <strong>IR00 0000 0000 0000 0000 0000 00</strong>
            </p>
            <p>
              <span>Amount to be withdrawn: </span>
              <strong>2376.00 IR</strong>
            </p>
          </div>

          <button type='button' className='button button-purple button-medium button-block'>
            Withdraw Money
          </button>
        </div>
      )}
    </Box>
  );
});

export default BankProcess;
