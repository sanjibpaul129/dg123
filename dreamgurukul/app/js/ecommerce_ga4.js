function trackecommerce_ga4(tracking_code, order_id, product_name, email, phone) {
    var lead_category = window.location.href;
    var transaction = "";
    if (email != null && email != "" && email != "null" && email != undefined) {
        transaction += "email:" + email;
    }
    if (phone != null && phone != "" && phone != "null" && phone != undefined) {
        transaction += " phone:" + phone;
    }

    if (typeof gtag === 'function') {
        try {
            // console.log("lead in GA")
            gtag("event", "purchase", {
                // This purchase event uses a different transaction ID
                // from the previous purchase event so Analytics
                // doesn't deduplicate the events.
                // Learn more: https://support.google.com/analytics/answer/12313109
                transaction_id: transaction,
                affiliation: "Website",
                value: 1,
                tax: 1,
                shipping: 1,
                currency: "INR",
                coupon: "1",
                items: [{
                    item_id: transaction,
                    item_name: transaction,
                    affiliation: "Website",
                    coupon: "1",
                    currency: "INR",
                    discount: 2.22,
                    index: 0,
                    item_brand: product_name,
                    item_category: lead_category,
                    item_category2: lead_category,
                    item_category3: lead_category,
                    item_category4: lead_category,
                    item_category5: lead_category,
                    item_list_id: transaction,
                    item_list_name: product_name,
                    item_variant: "1",
                    location_id: "",
                    price: 1,
                    quantity: 1
                }]
            });
        } catch (e) {

        }
    }


}

// function trackanalyticsevent(tracking_code, category, action, name) {
//     try {
//         if (typeof _gat != 'undefined') {
//             var pageTracker = _gat._getTracker(tracking_code);
//             pageTracker._trackPageview();
//             pageTracker._trackEvent(category, action, name);
//         } else {
//             if (typeof gtag === 'function') {
//                 gtag('send', 'event', category, action, name);
//             }
//         }
//     } catch (e) {

//     }

// }

document.onclick = function(event) {
    try {
        var el = event.target;
        var category = el.getAttribute('data-event-category');
        var action = el.getAttribute('data-event-action');
        var name = el.getAttribute('data-event-name');
        if (category != undefined && action != undefined && name != undefined) {

            if (typeof gtag === 'function') {
                try {
                    // console.log("Click event")
                    gtag('event', 'click', { 'event_category': category, 'event_action': action, 'event_name': name })
                } catch (e) {

                }
            }
        }
    } catch (e) {

    }
};
