// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Divider, Button } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const AssignmentModal = ({ open, handleClose, selectedAssignment }) => {
//   return (
//     <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//       <div className="modal-content">
//         <DialogTitle>
//           <h4>Дамашнє завдання</h4>
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={handleClose}
//             aria-label="close"
//             sx={{
//               position: 'absolute',
//               right: 8,
//               top: 8,
//               color: (theme) => theme.palette.grey[500],
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent dividers>
//           {selectedAssignment && selectedAssignment.length > 0 ? (
//             selectedAssignment.map((assignment, index) => (
//               <div key={index} style={{ marginBottom: '16px' }}>
//                 <Typography variant="h6">{`Предмет: ${assignment.subject}`}</Typography>
//                 <Typography variant="body1" sx={{ mb: 1 }}>{`День: ${assignment.day}`}</Typography>
//                 <Typography variant="body2" sx={{ mb: 2 }}>{`Домашнє завдання: ${assignment.homework}`}</Typography>
//                 {index < selectedAssignment.length - 1 && <Divider />}
//               </div>
//             ))
//           ) : (
//             <Typography variant="body1">Домашнє завдання відсутнє.</Typography>
//           )}
//         </DialogContent>
//         {/* <div className="modal-footer">
//           <Button className="modal-close waves-effect waves-green btn-flat" onClick={handleClose}>
//             Agree
//           </Button>
//         </div> */}
//       </div>
//     </Dialog>
//   );
// };

// export default AssignmentModal;

import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AssignmentModal = ({ open, handleClose, selectedAssignment }) => {
  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="sm" 
      fullWidth 
      PaperProps={{
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Напівпрозорий фон
          backdropFilter: 'blur(10px)', // Ефект розмиття заднього фону
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Легка тінь
          borderRadius: '12px', // Закруглені краї для модального вікна
        }
      }}
    >
      <div className="modal-content">
        <DialogTitle sx={{ position: 'relative', color: '#fff', textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)' }}>
          <Typography variant="h4">Домашнє завдання</Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedAssignment && selectedAssignment.length > 0 ? (
            selectedAssignment.map((assignment, index) => (
              <div key={index} style={{ marginBottom: '16px' }}>
                <Typography variant="h6" sx={{ color: '#ffffff', textShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' }}>
                  {`Предмет: ${assignment.subject}`}
                </Typography>
                <Typography variant="body1" sx={{ color: '#ffffff', mb: 1, textShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' }}>
                  {`День: ${assignment.day}`}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ffffff', mb: 2, textShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' }}>
                  {`Домашнє завдання: ${assignment.homework}`}
                </Typography>
                {index < selectedAssignment.length - 1 && <Divider sx={{ backgroundColor: '#ffffff' }} />}
              </div>
            ))
          ) : (
            <Typography variant="body1" sx={{ color: '#ffffff' }}>Домашнє завдання відсутнє.</Typography>
          )}
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default AssignmentModal;
