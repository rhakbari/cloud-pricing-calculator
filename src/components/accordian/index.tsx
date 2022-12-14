import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Theme, Tooltip } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { makeStyles, createStyles } from '@mui/styles'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    copybtn: {
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
    },
    accordian: {
      // marginTop: "5px",
      padding: '0px 50px 30px 50px',

      '@media only screen and (max-width: 767px)': {
        marginTop: '20px',
        padding: '0px 16px 25px 16px',
      },
      '&:last-child()': {
        paddingBottom: '30px',
      },
    },
  }),
)

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '& .MuiAccordionDetails-root': {
    padding: 0,
  },
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: '0.9rem', pointerEvents: 'auto' }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',

  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  '& .MuiAccordionDetails-root': {
    padding: 0,
  },
}))

const CustomizedAccordions = (props: any) => {
  const classes = useStyles()
  const {
    name,
    price,
    enablePrice,
    copyAndDeletebtn,
    delBtnOnClick,
    copyBtnOnClick,
    addBtnOnClick,
    component,
  } = props

  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    newExpanded: boolean,
  ) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Grid
      // style={{ marginTop: "50px", padding: "0px 50px" }}
      className={classes.accordian}
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
    >
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        style={{ background: '#FAFAFC' }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
            style={{ alignItems: 'center' }}
          >
            <Grid item md={8} sm={12}>
              <Typography fontWeight="bold" fontSize="15px">
                {name}
              </Typography>
            </Grid>
            {copyAndDeletebtn ? (
              <Grid
                item
                md={4}
                sm={12}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <Tooltip title="Add">
                  <IconButton
                    className={classes.copybtn}
                    onClick={(e) => {
                      e.stopPropagation()
                      addBtnOnClick()
                    }}
                  >
                    <AddCircleOutlineIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy">
                  <IconButton
                    className={classes.copybtn}
                    onClick={(e) => {
                      e.stopPropagation()
                      copyBtnOnClick()
                    }}
                  >
                    <ContentCopyIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation()
                      delBtnOnClick()
                    }}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                {enablePrice ? (
                  // <Grid item xs={1}>
                  <Box style={{ marginRight: '20px' }}>{price}</Box>
                ) : (
                  // {/* </Grid> */}
                  ''
                )}
              </Grid>
            ) : (
              ''
            )}
          </Grid>
        </AccordionSummary>
        <AccordionDetails>{component}</AccordionDetails>
      </Accordion>
    </Grid>
  )
}
export default CustomizedAccordions
