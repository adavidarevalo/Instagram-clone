import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const options = [
    {
        name: 'Perfil',
        icon: <AccountCircleOutlinedIcon fontSize="small" />,
    },
    {
        name: 'Guardado',
        icon: <BookmarkBorderOutlinedIcon fontSize="small" />,
    },
    {
        name: 'Configuracion',
        icon: <SettingsOutlinedIcon fontSize="small" />,
    },
    {
        name: 'Cambiar de cuenta',
        icon: <ChangeCircleOutlinedIcon fontSize="small" />,
    },
];

export default function AccountMenu() {
    return (
        <Paper sx={{ width: 215, maxWidth: '100%' }}>
            <MenuList>
                {options.map((opt) => (
                    <MenuItem key={opt.name}>
                        <ListItemIcon>
                            {opt.icon}
                        </ListItemIcon>
                        <ListItemText>{opt.name}</ListItemText>
                    </MenuItem>
                ))}
                <Divider />
                <MenuItem>
                    <ListItemText>Salir</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}
