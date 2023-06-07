import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

export default function BasicModal(props) {
  return (
    <div>
      <Modal
        open={props.modalOpen}
        onClose={props.handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
        display='flex'
        flexDirection='column'
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.default',
            border: 3,
            borderRadius:2,
            borderColor: 'primary.main',
            boxShadow: 24,
            p: 2,
            outline:'none',
          }}
        >
          <Typography id="modal-modal-title" variant="h6" align='center'>
            Sorry Individual Pages Aren't Implemented Yet.
          </Typography>

          <Box
            display='flex'
            justifyContent='center'
            sx={{width:'100%',mt:1}}
          >
            <Button
              sx={{
                width:40
              }}
              size='small'
              variant='contained'
              onClick={()=>{props.handleModalClose()}}
              >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
