import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
// import ArticleIcon from '@mui/icons-material/Article';
import { Button, Box, Typography } from '@mui/material';

const contacts = [
  // { name: 'Resume', icon: <ArticleIcon />, href: "Resume", color: "secondary", hover: "green-700" },
  { name: 'Email', icon: <EmailIcon />, href: "mailto:georgebemrose@gmail.com", color: "blue-400", hover: "blue-600" },
  { name: 'GitHub', icon: <GitHubIcon />, href: "https://github.com/GeorgeBemrose", color: "gray-800", hover: "gray-900" },
  { name: 'LinkedIn', icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/georgebemrose/", color: "blue-400", hover: "blue-600" }
];

export default function ContactBar() {

  return (
    <Box className="flex pb-4">
      {contacts.map((contact) => (
        <Button
          variant="contained"
          className={`bg-${contact.color} hover:bg-${contact.hover} text-white font-bold mr-4 rounded-full `}
          startIcon={contact.icon}
          target="_blank"
          href={contact.href}
          key={contact.name}
        >
          <Typography variant="body1" className="text-sm sm:text-md md:text-lg">{contact.name}</Typography>
          
        </Button>
      ))}
    </Box>
  );
}