import {EventStatus} from "@/definitions/enums/EventStatus";
import {TEvent} from "@/definitions/types/TEventsResponse";
import {TUserRoles} from "@/definitions/types/TUserRoles";

export interface IEventCardProps extends TEvent {
  role: TUserRoles;
  onClick: (event: TEvent) => void;
  onStatusChange?: (id: number, newStatus: EventStatus) => void;
}

export interface IEventsListProps {
  events: TEvent[];
  role: TUserRoles;
  onEdit: (event: TEvent) => void;
}