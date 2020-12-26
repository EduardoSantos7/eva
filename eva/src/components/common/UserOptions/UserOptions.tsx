import React, { useState } from 'react'
import "components/common/UserOptions/UserOptions.css"
import Avatar from "@material-ui/core/Avatar";
import Dropdown from "components/common/Dropdown/Dropdown";
import { useUser } from "providers/UserProvider";
import { User } from "interfaces/User";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3.4),
      height: theme.spacing(3.4),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);


export default function UserOptions() {
    const [open, setOpen] = useState(false);
    const user: User = useUser()
    const classes = useStyles();

    return (
        <div className="user__options" onClick={() => setOpen(!open)}>
            <div className="user__options__avatar__name">
                <Avatar className={classes.small} src={user.profile_image} />
                <span>
                    { user.profile_name}
                </span>
            </div>
            <TodayRoundedIcon />
            <NotificationsRoundedIcon />
            <ExpandMoreRoundedIcon />
            {open && <Dropdown />}
        </div>
    )
}