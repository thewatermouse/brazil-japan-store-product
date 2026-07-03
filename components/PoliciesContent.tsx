"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/data/products";

const copy = {
  pt: {
    eyebrow: "Políticas da loja",
    title: "Regras claras para comprar com confiança.",
    lead:
      "Estas políticas valem para todos os pedidos feitos pela loja. Em caso de dúvida, fale com a gente antes de confirmar a compra.",
    items: [
      {
        title: "Pedido e confirmação",
        text: "O pedido só é considerado fechado após confirmação de disponibilidade, valor final (produtos + frete) e forma de envio. Você recebe essa confirmação por email antes de qualquer cobrança definitiva."
      },
      {
        title: "Pagamento",
        text: "O pagamento online é processado pelo PayPal, em ienes (JPY). O total é recalculado no servidor antes da captura, para garantir que o valor cobrado corresponde exatamente ao carrinho. Não armazenamos dados de cartão."
      },
      {
        title: "Envio e prazos",
        text: "Os pedidos são enviados por correio internacional com rastreio. O prazo típico é de 10 a 20 dias úteis após a postagem, variando conforme a modalidade e o desembaraço aduaneiro. O código de rastreio é enviado por email."
      },
      {
        title: "Alfândega e importação pessoal no Japão",
        text: "Compras para consumo próprio entram no Japão como importação pessoal. O destinatário é o importador legal e pode ser responsável por eventuais taxas ou inspeções. Alimentos em pequenas quantidades para uso pessoal são geralmente aceitos, mas produtos como mel e própolis podem passar por verificação sanitária. Limitamos as quantidades por pedido para manter o enquadramento de uso pessoal."
      },
      {
        title: "Devolução e reembolso",
        text: "Por se tratar de alimentos, não aceitamos devolução por arrependimento após o envio, por razões de higiene e segurança alimentar. Se o produto chegar danificado, errado ou impróprio para consumo, entre em contato em até 7 dias do recebimento com fotos e número do pedido: faremos reposição ou reembolso integral."
      },
      {
        title: "Extravio",
        text: "Se o rastreio confirmar extravio ou devolução pela alfândega sem culpa do cliente, oferecemos reenvio ou reembolso integral, à escolha do cliente."
      },
      {
        title: "Dados do cliente",
        text: "Os dados enviados no checkout (nome, contato e endereço) são usados apenas para processar o pedido, emitir a documentação de envio e comunicar o status. Não repassamos dados a terceiros fora da operação logística e de pagamento."
      }
    ]
  },
  ja: {
    eyebrow: "ストアポリシー",
    title: "安心して購入いただくための明確なルール。",
    lead:
      "本ポリシーはストアでのすべてのご注文に適用されます。ご不明な点は、ご注文確定前にお気軽にお問い合わせください。",
    items: [
      {
        title: "注文確定について",
        text: "在庫、最終金額（商品＋送料）、配送方法を確認した後に正式受注となります。確定前に必ずメールでご案内します。"
      },
      {
        title: "お支払いについて",
        text: "オンライン決済はPayPalを利用し、日本円（JPY）で処理されます。請求金額はカート内容に基づき決済前にサーバー側で再計算されます。カード情報を当店が保管することはありません。"
      },
      {
        title: "配送と納期",
        text: "ご注文は追跡番号付きの国際郵便で発送します。発送後の目安は10〜20営業日で、配送方法や通関状況により変動します。追跡番号はメールでお知らせします。"
      },
      {
        title: "通関と個人輸入について",
        text: "ご自身で使用する目的のご購入は、個人輸入として日本に持ち込まれます。受取人が輸入者となり、関税や検査が発生する場合があります。個人使用の少量の食品は一般的に問題ありませんが、はちみつやプロポリスなどは検疫確認の対象になる場合があります。個人使用の範囲を保つため、1回のご注文数量に上限を設けています。"
      },
      {
        title: "返品・返金について",
        text: "食品の性質上、衛生と食品安全の観点から、発送後のお客様都合による返品はお受けできません。破損、内容違い、品質不良があった場合は、お受け取りから7日以内に写真と注文番号を添えてご連絡ください。再送または全額返金で対応します。"
      },
      {
        title: "紛失について",
        text: "追跡情報で紛失、またはお客様の責任によらない税関からの返送が確認された場合は、再送または全額返金をお選びいただけます。"
      },
      {
        title: "お客様情報について",
        text: "チェックアウトで入力いただいた情報（お名前・連絡先・住所）は、注文処理、発送書類の作成、状況のご連絡のためにのみ使用します。物流・決済に必要な範囲を超えて第三者に提供することはありません。"
      }
    ]
  }
} as const;

export function PoliciesContent({ language: forcedLanguage }: { language?: Language }) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;
  const t = copy[language];

  return (
    <section className="section">
      <div className="container prose-shell">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="lead">{t.lead}</p>
        <div className="stack-grid">
          {t.items.map((item, index) => (
            <article key={item.title} className="step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
