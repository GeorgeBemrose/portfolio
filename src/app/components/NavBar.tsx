import { AppBar, IconButton, Typography, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';


export default function NavBar({ currentPage, textColor }: { currentPage: string, textColor: string }) {
  return (
    <AppBar position='static' style={{ background: 'transparent', boxShadow: 'none' }}>

      <Box className="flex justify-between">

        <Typography
          variant="h4"
          color={textColor}
          className="justify-center">
          {currentPage != "Home" ? currentPage : null}
        </Typography>

        <div className='place-self-end'>
          <Link href="/">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"

              color="inherit"
            >
              <HomeIcon fontSize='large' color="primary"/>
            </IconButton>
          </Link>
        </div>

      </Box>

    </AppBar>);
}