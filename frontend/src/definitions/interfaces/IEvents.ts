import {EEventStatus} from "@/definitions/enums/EEventStatus.ts";
import {TEvent} from "@/definitions/types/TEventsResponse";
import {TUserRoles} from "@/definitions/types/TUserRoles";

export interface IEventCardProps extends TEvent {
  role: TUserRoles;
  onClick: (event: TEvent) => void;
  onStatusChange?: (id: number, newStatus: EEventStatus) => void;
}

export interface IEventsListProps {
  events: TEvent[];
  role: TUserRoles;
  onEdit: (event: TEvent) => void;
}