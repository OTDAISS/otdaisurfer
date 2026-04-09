{
  "component_name": "Pricing",
  "api_endpoint": "/api/create-checkout-session",
  "payment_provider": "Stripe",
  "pricing_tiers": [
    {
      "id": "price_setup_fee_id",
      "name": "Setup & Onboarding",
      "price": "$3,000+",
      "billing_type": "One-time",
      "features": [
        "Core Platform Config",
        "Journey Mapping",
        "KPI Definition"
      ]
    },
    {
      "id": "price_retainer_id",
      "name": "Monthly Retainer",
      "price": "$2,500/mo",
      "billing_type": "Subscription",
      "features": [
        "Ongoing Management",
        "All 3 Service Phases",
        "24/7 Monitoring"
      ]
    },
    {
      "id": "price_analytics_id",
      "name": "Advanced Analytics",
      "price": "$500/mo",
      "billing_type": "Add-on",
      "features": [
        "Custom Dashboards",
        "AI Insights",
        "Real-time Tracking"
      ]
    }
  ],
  "visual_style": {
    "background_color": "bg-slate-950",
    "card_background": "bg-slate-900",
    "accent_color": "emerald-400",
    "border_color": "border-emerald-500/20",
    "hover_border": "hover:border-emerald-500/50",
    "border_radius": "rounded-[2.5rem]",
    "button_styling": "bg-emerald-600 hover:bg-emerald-400 font-black uppercase tracking-widest text-black",
    "typography": {
      "tier_name": "text-xl font-black uppercase italic",
      "price": "text-4xl font-bold",
      "billing_type_label": "text-slate-500 text-[10px] uppercase font-black tracking-widest",
      "feature_text": "text-slate-400 text-sm"
    },
    "feature_icon": "✦"
  },
  "interaction": {
    "action": "Redirect to Stripe Checkout",
    "method": "POST",
    "payload": "priceId"
  }
}
