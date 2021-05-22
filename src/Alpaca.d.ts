// eslint-disable-next-line @typescript-eslint/no-var-requires

// export as namespace "Alpaca";

interface IClockTimeStamp {
  "timestamp": string;
  "is_open": boolean;
  "next_open": string;
  "next_close": string;
}

interface IPositionEntity {
  "asset_id": string;
  "symbol": string;
  "exchange": string;
  "asset_class": string;
  "avg_entry_price": string;
  "qty": string;
  "side": string;
  "market_value": string;
  "cost_basis": string;
  "unrealized_pl": string;
  "unrealized_plpc": string;
  "unrealized_intraday_pl": string;
  "unrealized_intraday_plpc": string;
  "current_price": string;
  "lastday_price": string;
  "change_today": string;
}

interface IAlpacaSettings {
  baseUrl: string;
  dataBaseUrl: string;
  dataStreamUrl: string;
  polygonBaseUrl: string;
  keyId: string;
  secretKey: string;
  apiVersion: string;
  oauth: string;
  usePolygon: boolean;
  paper: boolean;
  feed: string;
  verbose: boolean;
}

interface IOrderEntity {
  "id": string;
  "client_order_id": string;
  "created_at": string;
  "updated_at": string;
  "submitted_at": string;
  "filled_at": string | null;
  "expired_at": string | null;
  "canceled_at": string | null;
  "failed_at": string | null;
  "replaced_at": string | null;
  "replaced_by": string | null;
  "replaces": string | null;
  "asset_id": string;
  "symbol": string;
  "asset_class": string;
  "notional": string;
  "qty": string | null;
  "filled_qty": string;
  "filled_avg_price": string | null;
  "order_class": "" | "simple" | "bracket" | "oco" | "oto";
  "order_type": string; // deprecated
  "type": "market" | "limit" | "stop" | "stop_limit" | "trailing_stop";
  "side": "buy" | "sell";
  "time_in_force": "day" | "gtc" | "opg" | "cls" | "ioc" | "fok";
  "limit_price": string | null;
  "stop_price": string | null;
  "status": "new" | "partially_filled" | "filled" | "done_for_day" | "canceled" | "expired" | "replaced" | "pending_cancel" | "pending_replace"
    | "accepted" | "pending_new" | "accepted_for_bidding" | "stopped" | "rejected" | "suspended" | "calculated",
  "extended_hours": boolean;
  "legs": null; // null | Order[]
  "trail_percent": number | null;
  "trail_price": string | null;
  "hwm": string | null;
}

interface IOrdersQueryParams {
  status: 'open' | 'closed' | 'all';
  limit?: number;
  after?: string;
  until?: string;
  direction?: string;
  nested?: 'asc' | 'desc';
  symbols?: string;
}

interface Constructable<T> {
  new(...args:any): T;
}

// declare module "Alpaca" {
//   function Alpaca():Constructable<AlpacaSettings>
//   export = Alpaca;
// }

// To handle both importing via UMD and modules:

// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>
  /*~ This is the module template file for class modules.
   *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
   *~ For example, if you were writing a file for "super-greeter", this
   *~ file should be 'super-greeter/index.d.ts'
   */
// Note that ES6 modules cannot directly export class objects.
// This file should be imported using the CommonJS-style:
//   import x = require('[~THE MODULE~]');
//
// Alternatively, if --allowSyntheticDefaultImports or
// --esModuleInterop is turned on, this file can also be
// imported as a default import:
//   import x from '[~THE MODULE~]';
//
// Refer to the TypeScript documentation at
// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
// to understand common workarounds for this limitation of ES6 modules.
  /*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
   *~ loaded outside a module loader environment, declare that global here.
   *~ Otherwise, delete this declaration.
   */
// export as namespace "Alpaca";
/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = Alpaca;
/*~ Write your module's methods and properties in this class */
declare class Alpaca {
  constructor(settings?: Pick<IAlpacaSettings, 'keyId', 'secretKey'>);

  getPositions(): Promise<IPositionEntity[]>;
  getClock(): Promise<IClockTimeStamp>;
  getOrders(params: IOrdersQueryParams): Promise<IOrderEntity[]>;
  cancelOrder(orderId:string): Promise<IOrderEntity[]>;
}
/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 *~
 *~ Note that if you decide to include this namespace, the module can be
 *~ incorrectly imported as a namespace object, unless
 *~ --esModuleInterop is turned on:
 *~   import * as x from '[~THE MODULE~]'; // WRONG! DO NOT DO THIS!
 */

