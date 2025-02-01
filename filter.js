const dropdownItems = [
        { name: "Supply Chain As a Service (SCAAS)", url: "solution(scaas).html" },
        { name: "Supply Chain Optimization", url: "chain-optimization.html" },
        { name: "Freight Optimization", url: "solution(freight).html" },
        { name: "Packaging Optimization", url: "solution(packaging).html" },
        { name: "Route Optimization", url: "solution(route).html" },
        { name: "Workforce Scheduling", url: "solution(workforce).html" },
        { name: "Price Optimization and Revenue Management", url: "solution(price).html" },
        { name: "Sales & Operations Planning", url: "solution(sales).html" },
        { name: "Transport Management System (TMS)", url: "solution(tms).html" },
        { name: "Warehouse Management System (WMS)", url: "solution(wms).html" },
        { name: "Supply Chain Visibility", url: "visibility.html" },
        { name: "Asset/Inventory Tracking", url: "solution(tracking).html" },
        { name: "Anti-Counterfeit Solutions", url: "solution(anti).html" },
        { name: "Supply Chain Digitization", url: "solution(digitization).html" },
        { name: "Demand Management", url: "demand-management.html" },
        { name: "Supply Chain Planning", url: "chain-planning.html" },
        { name: "Supply Chain Design", url: "supply-chain-design.html" },
        { name: "Inventory Design", url: "inventory.html" },
        { name: "Demand Planning", url: "demand-planning.html" },
        { name: "Production Planning & Scheduling", url: "production-planning.html" },
        { name: "Logistics Planning & Sourcing", url: "logistics-planning.html" },
        { name: "RFQ Design", url: "logistics(RFQ).html" },
        { name: "Vendor Selection", url: "logistics(vendor).html" },
        { name: "Load Allocation Planning", url: "logistics(load-allocation).html" },
        { name: "Supply Chain Diagnostics", url: "diagnostics.html" },
        { name: "Performance Dashboard Design", url: "services(dashboard).html" },
        { name: "Supply Chain Risk Assessment", url: "services(assessment).html" },
        { name: "Supply Chain Modelling & Simulation", url: "modelling.html" },
        { name: "Supply Chain Analytics", url: "analytics.html" },
        { name: "Case Studies on Supply Chain Management", url: "training(management).html" },
        { name: "Managing Logistics Effectively", url: "training(manging).html" },
        { name: "Demand planning & Management", url: "training(demand).html" },
        { name: "Case Studies", url: "resource(case-study).html" },
        { name: "E-Book", url: "resource(E-book).html" },
        { name: "About SCM Connect", url: "about(scm).html" },
        { name: "Careers", url: "about(career).html" },
        { name: "Contact Us", url: "about(contact).html" },
    ];

function filterDropdown(query) {
    const dropdownList = document.getElementById("dropdown-list");
    dropdownList.innerHTML = ""; // Clear previous items
    if (!query.trim()) {
        dropdownList.style.display = "none";
        return;
    }

    const filteredItems = dropdownItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredItems.length === 0) {
        dropdownList.style.display = "none";
        return;
    }

    dropdownList.style.display = "block";

    filteredItems.forEach((item) => {
        const listItem = document.createElement("div");
        listItem.className = "dropdown-item";
        listItem.textContent = item.name;
        listItem.onclick = () => {
            window.location.href = item.url; // Navigate to the selected item's URL
        };
        dropdownList.appendChild(listItem);
    });
}