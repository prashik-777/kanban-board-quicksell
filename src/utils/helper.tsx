import React from 'react';
import NoPriorityIcon from '../assets/icons/No-priority.svg';
import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
import MediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';
import UrgentPriorityIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
import BacklogIcon from '../assets/icons/Backlog.svg';
import TodoIcon from '../assets/icons/To-do.svg';
import InProgressIcon from '../assets/icons/in-progress.svg';
import DoneIcon from '../assets/icons/Done.svg';
import CanceledIcon from '../assets/icons/Cancelled.svg';

export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <img src={NoPriorityIcon} alt="No priority" width={14} height={14} />;
        case "Low": return <img src={LowPriorityIcon} alt="Low priority" width={14} height={14} />;
        case "Medium": return <img src={MediumPriorityIcon} alt="Medium priority" width={14} height={14} />;
        case "High": return <img src={HighPriorityIcon} alt="High priority" width={14} height={14} />;
        case "Urgent": return <img src={UrgentPriorityIcon} alt="Urgent priority" width={14} height={14} />;
        default: return <img src={UrgentPriorityIcon} alt="Urgent priority" width={14} height={14} />;
    }
};

export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": return <img src={BacklogIcon} alt="Backlog" width={16} height={16} />;
        case "Todo": return <img src={TodoIcon} alt="Todo" width={16} height={16} />;
        case "In progress": return <img src={InProgressIcon} alt="In progress" width={16} height={16} />;
        case "Done": return <img src={DoneIcon} alt="Done" width={16} height={16} />;
        case "Canceled": return <img src={CanceledIcon} alt="Canceled" width={16} height={16} />;
        default: return <img src={CanceledIcon} alt="Canceled" width={16} height={16} />;
    }
};