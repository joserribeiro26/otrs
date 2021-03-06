// --
// Copyright (C) 2001-2016 OTRS AG, http://otrs.com/
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var Core = Core || {};
Core.Agent = Core.Agent || {};
Core.Agent.Admin = Core.Agent.Admin || {};

/**
 * @namespace Core.Agent.Admin.CustomerUser
 * @memberof Core.Agent.Admin
 * @author OTRS AG
 * @description
 *      This namespace contains the special module function for the CustomerUser module.
 */
 Core.Agent.Admin.CustomerUser = (function (TargetNS) {

    /**
     * @name Init
     * @memberof Core.Agent.Admin.CustomerUser
     * @function
     * @description
     *      This function initializes actions for customer update.
     */
    TargetNS.Init = function() {

        var Customer = Core.Config.Get('Customer');
        var Nav      = Core.Config.Get('Nav');

        // update customer only when parameter Nav is 'None'
        // which only happens when the AdminCustomerUser is called
        // from within the customer search iframe in AgentTicketPhone/Email etc.
        if (!Nav || Nav != 'None') {
            return;
        }

        // call UpdateCustomer function with customer from config if exists
        if (Customer) {
            Core.Agent.TicketAction.UpdateCustomer(Core.Language.Translate(Customer));
        }

        // call UpdateCustomer function with field text parameter
        $('#CustomerTable a').click(function () {
            Core.Agent.TicketAction.UpdateCustomer($(this).text());
        });

    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');

    return TargetNS;
}(Core.Agent.Admin.CustomerUser || {}));
