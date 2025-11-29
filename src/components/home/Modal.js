import React from 'react';
import { toPersian } from '../../numbers';

function Modal(props) {
  const { displayModal, closeModal, bill } = props;
  const divStyle = {
    display: displayModal ? 'block' : 'none',
  };
  
  function handleCloseModal(e) {
    e.stopPropagation();
    closeModal();
  }

  if (!bill) {
    return null;
  }

  const getStatusText = (status) => {
    if (status === 1) return 'موفق';
    if (status === 0) return 'عدم تطابق وزن';
    if (status === 2) return 'بارنامه مورد نظر موجود نیست';
    return 'بررسی نشده';
  };

  return (
    <div className="modal" onClick={handleCloseModal} style={divStyle}>
      <div className="close-container" onClick={handleCloseModal}>
        <span className="close">&times;</span>
      </div>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="status-section">
          <div className="status">
            <p>وضیعت استعلام: {getStatusText(bill.status)}</p>
          </div>
        </div>

        <div className="row">
          <p className="field-title">شناسه بازارگاه</p>
          <p className="field-value">{toPersian(bill.allocationId)}</p>
          <p className="field-title">آدرس گیرنده</p>
          <p className="field-value">{bill.receiver.addressReceive || ''}</p>
        </div>
        <div className="row">
          <p className="field-title">وزن بارنامه</p>
          <p className="field-value">{toPersian(bill.bill.weight)}</p>
          <p className="field-title">شماره ماشین</p>
          <p className="field-value">{bill.driver.carNumber || ''}</p>
        </div>
        <div className="row">
          <p className="field-title">تاریخ بارنامه</p>
          <p className="field-value">{toPersian(bill.bill.date)}</p>
          <p className="field-title">کد ملی گیرنده</p>
          <p className="field-value">{toPersian(bill.receiver.nationalId)}</p>
        </div>
        <div className="row">
          <p className="field-title">شماره بارنامه</p>
          <p className="field-value">{toPersian(bill.bill.number + '-' + bill.bill.serial)}</p>
        </div>
        <div className="row">
          <p className="field-title">نام کالا</p>
          <p className="field-value">{bill.product.name}</p>
        </div>
        <div className="row">
          <p className="field-title">شناسه تشخیص</p>
          <p className="field-value">{toPersian(bill.allocationId)}</p>
        </div>
        <div className="row">
          <p className="field-title">مبدا حمل</p>
          <p className="field-value">{bill.origin.name || ''}</p>
        </div>
        <div className="row">
          <p className="field-title">فی فروش</p>
          <p className="field-value">{toPersian(bill.product.pricePerSale)}</p>
        </div>
        <div className="row">
          <p className="field-title">شماره حواله</p>
          <p className="field-value">{bill.draft.number || ''}</p>
        </div>
        <div className="row">
          <p className="field-title">وزن حواله</p>
          <p className="field-value">{toPersian(bill.draft.weight)}</p>
          <p className="field-title">تاریخ حواله</p>
          <p className="field-value">{toPersian(bill.draft.date)}</p>
        </div>
        <div className="row"></div>
        <div className="row">
          <p className="field-title">نام گیرنده</p>
          <p className="field-value">{bill.receiver.name}</p>
          <p className="field-title">نام خریدار</p>
          <p className="field-value">{bill.customer.name}</p>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {};

export default Modal;
